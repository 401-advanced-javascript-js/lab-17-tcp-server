'use strict';

const net = require('net');

const PORT = process.env.PORT || 3001;
const server = net.createServer();

// listens for connections to PORT
server.listen(PORT, () => console.log(`Server up on ${PORT}`) );

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  // 'data' event happens whenever data is received
  socket.on('data', (buffer) => dispatchEvent(buffer));
  // 'close' emitted once the socket is fully closed
  socket.on('close', () => {
    delete socketPool[id];
  });
});

let dispatchEvent = (buffer) => {
  let bufferString = buffer.toString().trim();
  let [event, text] = bufferString.split(' ');
  for (let socket in socketPool) {
    socketPool[socket].write(`${event} ${text}`);
  }
};


