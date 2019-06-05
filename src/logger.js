'use strict';

const net = require('net');

const socket = new net.Socket();
const PORT = process.env.PORT || 3001;
const CLIENT_NAME = 'localhost';

socket.connect(PORT, CLIENT_NAME, () => {
  console.log('Logger connected.');

  socket.on('data', (buffer) => {
    let string = buffer.toString().trim().split(' ')[0];
    if (string === 'save') {
      console.log('🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰');
    } else if (string === 'error') {
      console.error('💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥');
    }
  });
});