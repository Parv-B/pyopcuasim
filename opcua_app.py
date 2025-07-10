# opcua_app.py (Modified)

import socket
import threading
import logging
from flask import Flask, render_template, request, jsonify

# Make sure opcua_server_module.py is in the same directory
from opcua_server_module import OPCUAServer

# --- Basic Configuration ---
logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

app = Flask(__name__)

# --- Global State Management ---
OPCUA_SERVERS = {}
SERVER_ID_COUNTER = 0
STATE_LOCK = threading.Lock()

# --- Utility to find local IP ---
def get_lan_ip():
    """
    Finds the local IP address of the machine.
    This is the IP that other devices on the same network should use to connect.
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Doesn't have to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        # Fallback if no network connection or other error
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

# Get the host IP once at startup
HOST_IP = get_lan_ip()
log.info(f"Detected Host IP for client connections: {HOST_IP}")

# --- Web UI Route ---
@app.route('/')
def index():
    """Serves the main HTML user interface."""
    return render_template('opcua_index.html')

# --- API Routes for UI Interaction ---

@app.route('/api/servers', methods=['GET'])
def get_servers():
    """Returns a list of all current servers and their status."""
    with STATE_LOCK:
        server_statuses = [
            {'id': server_id, **server.get_status()}
            for server_id, server in OPCUA_SERVERS.items()
        ]
    return jsonify(server_statuses)

@app.route('/api/servers', methods=['POST'])
def create_server():
    """Creates a new OPC UA server instance."""
    data = request.json
    try:
        port = int(data['port'])
        name = str(data['name'])
    except (ValueError, TypeError, KeyError):
        return jsonify({'error': 'Port and Name are required'}), 400

    with STATE_LOCK:
        for s in OPCUA_SERVERS.values():
            if s.port == port:
                return jsonify({'error': f'Port {port} is already in use'}), 409

        global SERVER_ID_COUNTER
        SERVER_ID_COUNTER += 1
        new_id = SERVER_ID_COUNTER

        # --- CHANGE: Pass the discovered HOST_IP to the server instance ---
        server = OPCUAServer(port=port, name=name, host_ip=HOST_IP)
        
        if not server.start_threaded():
            return jsonify({'error': 'Failed to start OPC UA server. Check console for details.'}), 500

        OPCUA_SERVERS[new_id] = server
        log.info(f"Created and started OPC UA server {new_id} ('{name}') on port {port}")

    return jsonify({'id': new_id, **server.get_status()}), 201

# --- Other routes remain unchanged ---

@app.route('/api/servers/<int:server_id>', methods=['DELETE'])
def delete_server(server_id):
    """Stops and removes an OPC UA server."""
    with STATE_LOCK:
        if server_id not in OPCUA_SERVERS:
            return jsonify({'error': 'Server not found'}), 404
        server = OPCUA_SERVERS[server_id]
        server.stop()
        del OPCUA_SERVERS[server_id]
        log.info(f"Stopped and deleted OPC UA server {server_id}")
    return jsonify({'message': 'Server deleted successfully'}), 200

@app.route('/api/servers/<int:server_id>/data', methods=['GET'])
def get_server_data(server_id):
    """Gets all data points for a specific server."""
    with STATE_LOCK:
        if server_id not in OPCUA_SERVERS:
            return jsonify({'error': 'Server not found'}), 404
        server = OPCUA_SERVERS[server_id]
        data = server.get_all_data()
    for key in data:
        data[key] = dict(sorted(data[key].items()))
    return jsonify(data)

@app.route('/api/servers/<int:server_id>/data', methods=['POST'])
def update_server_data(server_id):
    """Updates or adds a data point for a specific server."""
    data = request.json
    try:
        data_type = str(data['type'])
        var_name = str(data['name'])
        value = data['value']
    except (ValueError, TypeError, KeyError):
        return jsonify({'error': 'Invalid request format'}), 400
    with STATE_LOCK:
        if server_id not in OPCUA_SERVERS:
            return jsonify({'error': 'Server not found'}), 404
        server = OPCUA_SERVERS[server_id]
        server.set_data_point(data_type, var_name, value)
    return jsonify({'message': 'Data updated successfully'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, debug=False)