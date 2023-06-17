const net = require('net');

// Variables
const port = 4080;
const host =  '127.0.0.1';

const socket = net.createConnection({ host, port }, () => {});
