const net = require('node:net');

// Variables
const port = 4080;
const host =  '127.0.0.1';

const server = net.createServer(() => {});

server.on('connection', (socket) => {
    console.log('New connection!');
});

server.listen(port, host, () => {
    console.log('Start app on host:port', server.address());
});
