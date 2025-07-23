import asyncio
import logging
import threading
from typing import Dict, Any, Optional

try:
    from asyncua import Server, ua
    from asyncua.server.users import UserRole
    from asyncua.common.node import Node
except ImportError:
    print("FATAL: asyncua is not installed. Please run 'pip install asyncua'")
    exit()

log = logging.getLogger(__name__)

class SubHandler:
    def __init__(self, server_instance):
        self.server = server_instance

    def datachange_notification(self, node: Node, val: Any, data):
        """
        This is the callback method that asyncua calls on a data change.
        """
        self.server.sync_change_from_opcua(node, val)

    def event_notification(self, event):
        log.debug(f"OPC UA Event: {event}")


class OpcUaServer:
    """
    Manages a single, self-contained OPC UA server instance.
    Now with two-way data synchronization.
    """
    def __init__(self, port: int = 4840, name: str = "OPC UA Server", endpoint_path: str = "/simulator/server"):
        self.port = port
        self.name = name
        self.endpoint_path = endpoint_path
        self.endpoint_url = f"opc.tcp://0.0.0.0:{port}{endpoint_path}"
        
        self.is_running = False
        self._server_thread: Optional[threading.Thread] = None
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        self.server: Optional[Server] = None
        
        self.namespace_uri = f"http://simulator.example.com/{name.replace(' ', '_')}"
        self.namespace_idx: Optional[int] = None
        
        self._startup_event = threading.Event()
        
        self.boolean_vars: Dict[str, bool] = {}
        self.integer_vars: Dict[str, int] = {}
        self.float_vars: Dict[str, float] = {}
        self.string_vars: Dict[str, str] = {}
        
        self.node_to_internal_map: Dict[Node, tuple[dict, str]] = {}
        
        self.ua_nodes: Dict[str, Node] = {}
        
        self._initialize_default_data()
        log.info(f"OpcUaServer '{self.name}' initialized for endpoint: {self.endpoint_url}")

    def _initialize_default_data(self):
        self.boolean_vars = {f"Bool{i:02d}": bool(i%2) for i in range(1, 11)}
        self.integer_vars = {f"Int{i}": i for i in range(1, 11)}
        self.float_vars = {f"Float{i}": i*1.1 for i in range(1, 11)}
        self.string_vars = {f"Str{i}": f"String {i}" for i in range(1, 11)}

    async def _setup_server_nodes(self):
        self.server = Server()
        await self.server.init()
        self.server.set_endpoint(self.endpoint_url)
        self.server.set_security_policy([ua.SecurityPolicyType.NoSecurity])
        
        self.namespace_idx = await self.server.register_namespace(self.namespace_uri)
        
        device = await self.server.nodes.objects.add_object(self.namespace_idx, self.name.replace(' ', '_'))
        
        async def add_var(folder_name, var_dict, ua_type, prefix):
            folder = await device.add_folder(self.namespace_idx, folder_name)
            for name, value in var_dict.items():
                numeric_part = ''.join(filter(str.isdigit, name))
                node_id_str = name[0] + numeric_part
                node_id = ua.NodeId(node_id_str, self.namespace_idx, ua.NodeIdType.String) 
                var_node = await folder.add_variable(node_id, name, value, ua_type)
                await var_node.set_writable()
                self.ua_nodes[f"{prefix}_{name}"] = var_node
                self.node_to_internal_map[var_node] = (var_dict, name)

        await add_var("Booleans", self.boolean_vars, ua.VariantType.Boolean, "bool")
        await add_var("Integers", self.integer_vars, ua.VariantType.Int64, "int")
        await add_var("Floats", self.float_vars, ua.VariantType.Double, "float")
        await add_var("Strings", self.string_vars, ua.VariantType.String, "str")

        handler = SubHandler(self)
        subscription = await self.server.create_subscription(500, handler)
        await subscription.subscribe_data_change(list(self.node_to_internal_map.keys()))
        log.info(f"Subscription created for {len(self.node_to_internal_map)} variables.")

    def sync_change_from_opcua(self, node: Node, val: Any):
        """
        Updates the internal Python dictionary when a change from an OPC UA client is detected.
        """
        if node in self.node_to_internal_map:
            target_dict, var_name = self.node_to_internal_map[node]
            if var_name in target_dict and target_dict[var_name] != val:
                log.info(f"SYNC: External change detected on '{var_name}'. Old: {target_dict[var_name]}, New: {val}")
                target_dict[var_name] = val
        else:
            log.warning(f"SYNC: Received change for an untracked node: {node}")


    def _run_server(self):
        self._loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self._loop)
        
        try:
            self._loop.run_until_complete(self._setup_server_nodes())

            async def main_runner():
                async with self.server:
                    self.is_running = True
                    log.info(f"OPC UA Server '{self.name}' is up and running on {self.endpoint_url}")
                    self._startup_event.set() 
                    
                    while self.is_running:
                        await asyncio.sleep(0.5)
            
            self._loop.run_until_complete(main_runner())

        except (OSError, asyncio.CancelledError) as e:
            log.warning(f"Server on port {self.port} could not start or was stopped: {e}")
            self._startup_event.set()
        except Exception as e:
            log.error(f"Error in OPC UA server thread on port {self.port}: {e}", exc_info=True)
            self._startup_event.set()
        finally:
            self.is_running = False
            if self._loop and self._loop.is_running():
                self._loop.stop()
            if self._loop and not self._loop.is_closed():
                self._loop.close()
            log.info(f"OPC UA server thread on port {self.port} has shut down.")

    def start_threaded(self) -> bool:
        if self.is_running:
            return False
        
        self._startup_event.clear()
        self._server_thread = threading.Thread(target=self._run_server, daemon=True)
        self._server_thread.start()
        
        event_was_set = self._startup_event.wait(timeout=10.0)
        return event_was_set and self.is_running

    def stop(self):
        if not self.is_running:
            return
        
        self.is_running = False 
        
        if self._server_thread and self._server_thread.is_alive():
            self._server_thread.join(timeout=2.0)
        log.info(f"OPC UA server on port {self.port} stopped.")

    def get_all_data(self) -> Dict[str, Dict[str, Any]]:
        return {
            'boolean_vars': self.boolean_vars.copy(),
            'integer_vars': self.integer_vars.copy(),
            'float_vars': self.float_vars.copy(),
            'string_vars': self.string_vars.copy()
        }

    def set_data_point(self, data_type: str, var_name: str, value: Any) -> bool:
        log.info(f"Attempting to set {data_type} '{var_name}' to {value}")
        data_map = {
            'boolean_vars': (self.boolean_vars, bool, 'bool'),
            'integer_vars': (self.integer_vars, int, 'int'),
            'float_vars': (self.float_vars, float, 'float'),
            'string_vars': (self.string_vars, str, 'str'),
        }

        if data_type not in data_map:
            log.error(f"Invalid data type '{data_type}'")
            return False
            
        target_dict, type_caster, prefix = data_map[data_type]
        
        try:
            sanitized_value = type_caster(value)
        except (ValueError, TypeError):
             log.error(f"Could not cast value '{value}' to type for {data_type}")
             return False

        target_dict[var_name] = sanitized_value

        if self.is_running and self._loop:
            node_key = f"{prefix}_{var_name}"
            node = self.ua_nodes.get(node_key)
            if node:
                coro = node.write_value(sanitized_value)
                asyncio.run_coroutine_threadsafe(coro, self._loop)
            else:
                 log.warning(f"Live OPC UA node not found for '{node_key}'. Internal state updated only.")

        return True