'use strict';

/**
 * Read File Async
 * @module readFile
 */

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

/**
 * Reads passed in file and returns buffer of file contents
 * @param filename
 * @returns {*|never|Promise<any>|Promise<void>|Promise<Buffer | string>}
 */
module.exports = (filename) => readFileAsync(filename);