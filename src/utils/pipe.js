/**
 * Left to right function composition
 * @module pipe
 * @param  {...functions} fns Arguments as functions
 * @type {function}
 * @returns {function}
 */
const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg);

module.exports = pipe;
