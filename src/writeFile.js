'use strict';

/**
 * Write File Async
 * @module writeFile
 */

const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

/**
 * Writes passed buffer to passed file
 *
 * @param filename
 * @param buffer
 * @returns {*|never|Promise<any>|Promise<void>}
 */
module.exports = (filename, buffer) => writeFileAsync(filename, buffer);