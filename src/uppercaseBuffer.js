'use strict';

/**
 * Uppercase Buffer
 * @module uppercaseBuffer
 */

/**
 * Takes in buffer object and returns new buffer with values of passed buffer capitalized
 *
 * @param buffer, buffer object to uppercase
 * @returns {Buffer}, capitalized buffer
 */
module.exports = (buffer) => {
  return new Buffer.from(buffer.toString().toUpperCase());
};