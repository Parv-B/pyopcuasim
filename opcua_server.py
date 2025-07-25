import asyncio
import logging
import threading
import csv
import io
from typing import Dict, Any, Optional
from asyncua import Server, ua
from asyncua.server.users import UserRole
from asyncua.common.node import Node

log = logging.getLogger(__name__)

class SubHandler:
    def __init__(self, server_instance):
        self.server = server_instance

    def datachange_notification(self, node: Node, val: Any, data):
        self.server.sync_change_from_opcua(node, val)

    def event_notification(self, event):
        log.debug(f"OPC UA Event: {event}")


class OpcUaServer:
    """
    Manages a single, self-contained OPC UA server instance.
    """
    def __init__(self, port: int = 4840, name: str = "OPC UA Server", endpoint_path: str = "/simulator/server", csv_data: str = None):
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
        
        # Updated data structure for the four categories
        self.analog_input_vars: Dict[str, float] = {}
        self.analog_output_vars: Dict[str, float] = {}
        self.digital_input_vars: Dict[str, bool] = {}
        self.digital_output_vars: Dict[str, bool] = {}
        
        self.node_to_internal_map: Dict[Node, tuple[dict, str]] = {}
        
        self.ua_nodes: Dict[str, Node] = {}
        
        if csv_data:
            self._parse_csv_data(csv_data)
        else:
            self._initialize_default_data()
            
        log.info(f"OpcUaServer '{self.name}' initialized for endpoint: {self.endpoint_url}")

    def _parse_csv_data(self, csv_data: str):
        """Parse CSV data using fixed column positions."""
        try:
            lines = csv_data.strip().split('\n')
            # Skip header row
            for line in lines[1:]:
                if not line.strip():
                    continue
                    
                cols = [col.strip() for col in line.split(',')]
                
                # Analog Input: columns 0 (name), 1 (desc), 2 (value)
                if len(cols) > 0 and cols[0]:
                    ai_name = cols[0]
                    ai_desc = cols[1] if len(cols) > 1 else ""
                    ai_value = float(cols[2]) if len(cols) > 2 and cols[2] else 0.0
                    self.analog_input_vars[ai_name] = {'value': ai_value, 'desc': ai_desc}
                
                # Analog Output: columns 4 (name), 5 (value), 6 (desc)
                if len(cols) > 4 and cols[4]:
                    ao_name = cols[4]
                    ao_value = float(cols[5]) if len(cols) > 5 and cols[5] else 0.0
                    ao_desc = cols[6] if len(cols) > 6 else ""
                    self.analog_output_vars[ao_name] = {'value': ao_value, 'desc': ao_desc}
                
                # Digital Input: columns 8 (name), 9 (value), 10 (desc)
                if len(cols) > 8 and cols[8]:
                    di_name = cols[8]
                    di_value = bool(int(cols[9])) if len(cols) > 9 and cols[9] else False
                    di_desc = cols[10] if len(cols) > 10 else ""
                    self.digital_input_vars[di_name] = {'value': di_value, 'desc': di_desc}
                
                # Digital Output: columns 12 (name), 13 (value), 14 (desc)
                if len(cols) > 12 and cols[12]:
                    do_name = cols[12]
                    do_value = bool(int(cols[13])) if len(cols) > 13 and cols[13] else False
                    do_desc = cols[14] if len(cols) > 14 else ""
                    self.digital_output_vars[do_name] = {'value': do_value, 'desc': do_desc}
            
            log.info(f"Parsed CSV data: AI={len(self.analog_input_vars)}, AO={len(self.analog_output_vars)}, DI={len(self.digital_input_vars)}, DO={len(self.digital_output_vars)}")
            
        except Exception as e:
            log.error(f"Error parsing CSV data: {e}")
            self._initialize_default_data()

    def _initialize_default_data(self):
        """Initialize with default data if no CSV is provided."""
        self.analog_input_vars = {f"AI{i:02d}": {'value': i*1.1, 'desc': f"Analog Input {i}"} for i in range(1, 11)}
        self.analog_output_vars = {f"AO{i:02d}": {'value': i*0.5, 'desc': f"Analog Output {i}"} for i in range(1, 6)}
        self.digital_input_vars = {f"DI{i:02d}": {'value': bool(i%2), 'desc': f"Digital Input {i}"} for i in range(1, 11)}
        self.digital_output_vars = {f"DO{i:02d}": {'value': bool(i%3), 'desc': f"Digital Output {i}"} for i in range(1, 6)}

    async def _setup_server_nodes(self):
        self.server = Server()
        await self.server.init()
        self.server.set_endpoint(self.endpoint_url)
        self.server.set_security_policy([ua.SecurityPolicyType.NoSecurity])
        
        self.namespace_idx = await self.server.register_namespace(self.namespace_uri)
        
        device = await self.server.nodes.objects.add_object(self.namespace_idx, self.name.replace(' ', '_'))
        
        async def add_var(folder_name, var_dict, ua_type, prefix):
            folder = await device.add_folder(self.namespace_idx, folder_name)
            for name, data in var_dict.items():
                value = data['value']
                desc = data['desc']
                
                node_id = ua.NodeId(name, self.namespace_idx, ua.NodeIdType.String) 
                var_node = await folder.add_variable(node_id, name, value, ua_type)
                await var_node.set_writable()
                
                if desc:
                    datavalue = ua.DataValue(ua.LocalizedText(desc))
                    await var_node.write_attribute(ua.AttributeIds.Description, datavalue)
                
                self.ua_nodes[f"{prefix}_{name}"] = var_node
                self.node_to_internal_map[var_node] = (var_dict, name)

        await add_var("AnalogInput", self.analog_input_vars, ua.VariantType.Double, "ai")
        await add_var("AnalogOutput", self.analog_output_vars, ua.VariantType.Double, "ao")
        await add_var("DigitalInput", self.digital_input_vars, ua.VariantType.Boolean, "di")
        await add_var("DigitalOutput", self.digital_output_vars, ua.VariantType.Boolean, "do")

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
            if var_name in target_dict and target_dict[var_name]['value'] != val:
                log.info(f"SYNC: External change detected on '{var_name}'. Old: {target_dict[var_name]['value']}, New: {val}")
                target_dict[var_name]['value'] = val
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
            'analog_input_vars': self.analog_input_vars.copy(),
            'analog_output_vars': self.analog_output_vars.copy(),
            'digital_input_vars': self.digital_input_vars.copy(),
            'digital_output_vars': self.digital_output_vars.copy()
        }

    def set_data_point(self, data_type: str, var_name: str, value: Any) -> bool:
        log.info(f"Attempting to set {data_type} '{var_name}' to {value}")
        data_map = {
            'analog_input_vars': (self.analog_input_vars, float, 'ai'),
            'analog_output_vars': (self.analog_output_vars, float, 'ao'),
            'digital_input_vars': (self.digital_input_vars, bool, 'di'),
            'digital_output_vars': (self.digital_output_vars, bool, 'do'),
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

        if var_name not in target_dict:
            target_dict[var_name] = {'value': sanitized_value, 'desc': ''}
        else:
            target_dict[var_name]['value'] = sanitized_value

        if self.is_running and self._loop:
            node_key = f"{prefix}_{var_name}"
            node = self.ua_nodes.get(node_key)
            if node:
                coro = node.write_value(sanitized_value)
                asyncio.run_coroutine_threadsafe(coro, self._loop)
            else:
                 log.warning(f"Live OPC UA node not found for '{node_key}'. Internal state updated only.")

        return True