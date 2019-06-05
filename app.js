'use strict';

// require('./src/logger.js');
const net = require('net');

const readFile = require('./src/readFile.js');
const uppercaseBuffer = require('./src/uppercaseBuffer.js');
const writeFile = require('./src/writeFile.js');

const socket = new net.Socket();
const PORT = process.env.PORT || 3001;
const CLIENT_NAME = 'localhost';

socket.connect(PORT, CLIENT_NAME,() => {
  console.log('App connected.');
  uppercaseFile(filename);
});

const filename = process.argv.slice(2).shift();

const uppercaseFile = (file) => {
  readFile(file)
  .then((buffer) => uppercaseBuffer(buffer))
  .then((buffer) => writeFile(filename, buffer) || buffer)
  .then( () => socket.write(new Buffer.from('save')))
  .then( () => socket.end() )
  .catch( () => socket.write(new Buffer.from('error')));
};