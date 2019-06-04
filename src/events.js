const eventEmitter = require('./event-emitter.js');

const readFile = require('./readFile.js');
const uppercaseBuffer = require('./uppercaseBuffer.js');
const writeFile = require('./writeFile.js');

eventEmitter.on('uppercase', (filename) => {
  readFile(filename)
  .then(buffer => uppercaseBuffer(buffer))
  .then((buffer) => writeFile(filename, buffer))
  .then( () => eventEmitter.emit('log write', filename))
  .catch((error) => throw error);
});