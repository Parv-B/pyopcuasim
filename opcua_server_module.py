# opcua_server_module.py (Corrected for Network Discovery)
"""
OPC UA Server Implementation for the Simulator

This module provides an OPC UA server simulation with configurable data points,
designed to be managed by a parent Flask application.
"""
import asyncio
import logging
import threading
import time
from typing import Dict, Any, Optional

from asyncua import Server, ua, Node

log = logging.getLogger(__name__)

class OPCUAServer:
    """
    Manages a single OPC UA Server instance, running in its own thread.
    """
    def __init__(self, port: int = 4840, name: str = "OPC UA Device", host_ip: str = "127.0.0.1"):
        self.port = port
        self.name = name
        # --- CHANGE 1: Store the host_ip as a class attribute ---
        self.host_ip = host_ip
        
        # The URL the server listens on (all interfaces)
        self.bind_url = f"opc.tcp://0.0.0.0:{port}/"
        # The URL a client should use to connect (specific IP)
        self.endpoint_url = f"opc.tcp://{self.host_ip}:{port}/"
        
        self.is_running = False
        self._server_thread: Optional[threading.Thread] = None
        self._server_obj: Optional[Server] = None
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        
        self.namespace_uri = f"http://simulator.example.com/{name.replace(' ', '_')}"
        self.namespace_idx: Optional[int] = None
        
        self.variables: Dict[str, Dict[str, Any]] = {
            'boolean': {"HeaterOn": True, "PumpRunning": False},
            'integer': {"ProductionCount": 120, "ErrorCode": 0},
            'float': {"Temperature": 25.5, "Pressure": 1.2},
            'string': {"StatusMessage": "Idle", "LastAlarm": "None"}
        }
        self.ua_nodes: Dict[str, Node] = {}
        
        log.info(f"OPCUAServer '{self.name}' initialized. Clients should connect to: {self.endpoint_url}")

    async def _setup_server(self):
        """Coroutine to initialize the OPC UA server and its nodes."""
        self._server_obj = Server()
        
        # --- CHANGE 2 (CRITICAL): Set the hostname for the server to advertise ---
        # This must be done *before* server.init()
        self._server_obj.hostname = self.host_ip
        
        await self._server_obj.init()
        self._server_obj.set_endpoint(self.bind_url)
        
        self.namespace_idx = await self._server_obj.register_namespace(self.namespace_uri)
        
        device_obj = await self._server_obj.nodes.objects.add_object(
            self.namespace_idx, self.name.replace(' ', '_'))
        
        for var_type, items in self.variables.items():
            folder = await device_obj.add_folder(self.namespace_idx, f"{var_type.capitalize()}Variables")
            for name, value in items.items():
                await self._create_ua_variable(folder, var_type, name, value)
        
        handler = SubscriptionHandler(self)
        subscription = await self._server_obj.create_subscription(500, handler)
        await subscription.subscribe_data_change(list(self.ua_nodes.values()))
        
        log.info(f"OPC UA Server '{self.name}' setup complete.")

    # --- Other methods remain unchanged ---
    
    async def _create_ua_variable(self, parent_folder, var_type, name, value):
        if self.namespace_idx is None: return
        type_map = {'boolean': ua.VariantType.Boolean, 'integer': ua.VariantType.Int64, 'float': ua.VariantType.Double, 'string': ua.VariantType.String}
        ua_type = type_map.get(var_type)
        if not ua_type: return
        node_key = f"{var_type}_{name}"
        var_node = await parent_folder.add_variable(self.namespace_idx, name, value, ua_type)
        await var_node.set_writable()
        self.ua_nodes[node_key] = var_node

    def _run_in_thread(self):
        self._loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self._loop)
        try:
            self._loop.run_until_complete(self._setup_server())
            self.is_running = True
            log.info(f"OPC UA Server '{self.name}' is now running...")
            self._loop.run_forever()
        except Exception as e:
            log.error(f"OPC UA Server '{self.name}' thread failed: {e}", exc_info=True)
        finally:
            self.is_running = False
            log.info(f"OPC UA Server '{self.name}' event loop closed.")
    
    def start_threaded(self) -> bool:
        if self.is_running: return False
        self._server_thread = threading.Thread(target=self._run_in_thread, daemon=True)
        self._server_thread.start()
        time.sleep(2)
        return self.is_running

    def stop(self):
        if not self.is_running or not self._loop: return
        log.info(f"Stopping OPC UA server '{self.name}'...")
        self._loop.call_soon_threadsafe(self._loop.stop)
        if self._server_thread:
            self._server_thread.join(timeout=3)
        self.is_running = False
        log.info(f"OPC UA server '{self.name}' stopped.")
        
    def set_data_point(self, var_type: str, name: str, value: Any):
        if var_type not in self.variables: return
        try:
            if var_type == 'boolean': value = bool(value)
            elif var_type == 'integer': value = int(value)
            elif var_type == 'float': value = float(value)
            else: value = str(value)
        except (ValueError, TypeError): return
        self.variables[var_type][name] = value
        if self.is_running and self._loop:
            node_key = f"{var_type}_{name}"
            node = self.ua_nodes.get(node_key)
            if node:
                asyncio.run_coroutine_threadsafe(node.write_value(value), self._loop)
    
    def get_status(self) -> Dict[str, Any]:
        return {
            'name': self.name,
            'endpoint_url': self.endpoint_url,
            'port': self.port,
            'is_running': self.is_running,
            'namespace_uri': self.namespace_uri,
        }
    
    def get_all_data(self) -> Dict[str, Dict[str, Any]]:
        return {
            'boolean': self.variables['boolean'].copy(),
            'integer': self.variables['integer'].copy(),
            'float': self.variables['float'].copy(),
            'string': self.variables['string'].copy(),
        }

class SubscriptionHandler:
    def __init__(self, server_instance: OPCUAServer):
        self.server = server_instance

    def datachange_notification(self, node: Node, val: Any, data):
        node_key = None
        for key, n in self.server.ua_nodes.items():
            if n == node:
                node_key = key
                break
        if node_key:
            var_type, var_name = node_key.split('_', 1)
            log.info(f"External client changed '{var_name}' ({var_type}) to: {val}")
            self.server.variables[var_type][var_name] = val