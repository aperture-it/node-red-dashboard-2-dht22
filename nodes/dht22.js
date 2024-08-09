module.exports = function (RED) {
    function dht22Node(config) {
        RED.nodes.createNode(this, config)

        const node = this
        const group = RED.nodes.getNode(config.group)
        let monitor = 'yes'

        const evts = {
            onAction: true,
            onInput: function (msg, send, done) {
                //send(msg)
            },
            onSocket: {
                'get-monitor': (conn, id, msg) => {
                    conn.emit(`msg-in:${id}`, { monitor: monitor })
                },
                'set-monitor': (conn, id, msg) => {
                    monitor = msg.payload
                },
            }
        }

        if (group) {
            group.register(node, config, evts)
        } else {
            node.error('No group configured')
        }
    }

    RED.nodes.registerType('dht22', dht22Node)
}
