# opcua_app.py (Updated for Custom Endpoints)

import threading
import logging
from flask import Flask, render_template, request, jsonify

from opcua_server_simplified import OpcUaServer

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

app = Flask(__name__)

OPCUA_SERVERS: dict[int, OpcUaServer] = {}
STATE_LOCK = threading.Lock()

@app.route('/')
def index():
    return render_template('opcua_index.html')

@app.route('/api/servers', methods=['GET'])
def get_servers():
    all_servers = []
    with STATE_LOCK:
        for port, server in OPCUA_SERVERS.items():
            all_servers.append({
                'port': port,
                'name': server.name,
                'endpoint_url': server.endpoint_url,
                'is_running': server.is_running
            })
    return jsonify(all_servers)

# MODIFICATION: Updated create_server function
@app.route('/api/servers', methods=['POST'])
def create_server():
    """Creates and starts a new OPC UA server instance."""
    data = request.json
    try:
        port = int(data['port'])
        name = str(data.get('name') or f"OPC UA Server on Port {port}")
        # Get the endpoint path, with a default if it's missing
        endpoint_path = str(data.get('endpoint_path', '/simulator/server'))

        # Basic validation for the path
        if not endpoint_path.startswith('/'):
            return jsonify({'error': 'Endpoint Path must start with a /'}), 400

    except (ValueError, TypeError, KeyError):
        return jsonify({'error': 'Port, Name, and Endpoint Path must be provided'}), 400

    with STATE_LOCK:
        if port in OPCUA_SERVERS:
            return jsonify({'error': f'A server is already configured on port {port}'}), 409
        
        # Pass all parameters to the constructor
        server = OpcUaServer(port=port, name=name, endpoint_path=endpoint_path)
        if not server.start_threaded():
            return jsonify({'error': f'Failed to start server on port {port}. It may be in use.'}), 500
            
        OPCUA_SERVERS[port] = server
        
    return jsonify({
        'message': f'OPC UA Server "{name}" on port {port} created successfully',
        'port': port,
        'name': name,
        'endpoint_url': server.endpoint_url,
    }), 201


@app.route('/api/servers/<int:port>', methods=['DELETE'])
def delete_server(port):
    with STATE_LOCK:
        server = OPCUA_SERVERS.get(port)
        if not server:
            return jsonify({'error': 'Server not found'}), 404

        server.stop()
        del OPCUA_SERVERS[port]
        log.info(f"Stopped and removed server on port {port}.")

    return jsonify({'message': 'Server deleted successfully'}), 200

@app.route('/api/servers/<int:port>/data', methods=['GET'])
def get_server_data(port):
    with STATE_LOCK:
        server = OPCUA_SERVERS.get(port)
        if not server:
            return jsonify({'error': 'Server not found'}), 404
        data = server.get_all_data()

    for key in data:
        data[key] = dict(sorted(data[key].items()))
        
    return jsonify(data)

@app.route('/api/servers/<int:port>/data', methods=['POST'])
def update_server_data(port):
    req_data = request.json
    try:
        data_type = req_data['type']
        var_name = req_data['name']
        value = req_data['value']
    except (TypeError, KeyError):
        return jsonify({'error': 'Invalid request format. Must include type, name, and value.'}), 400

    with STATE_LOCK:
        server = OPCUA_SERVERS.get(port)
        if not server:
            return jsonify({'error': 'Server not found'}), 404
        
        success = server.set_data_point(data_type, var_name, value)
        if not success:
            return jsonify({'error': 'Failed to update data point.'}), 500

    return jsonify({'message': 'Data updated successfully'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, threaded=True, debug=False)