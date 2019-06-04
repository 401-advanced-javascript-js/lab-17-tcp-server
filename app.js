'use strict';

const eventEmitter = require('./src/event-emitter.js');

// require('./src/logger.js');
require('./src/events.js');

const filename = process.argv.slice(2).shift();

eventEmitter.emit('uppercase', filename);
