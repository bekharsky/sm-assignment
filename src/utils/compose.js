/**
 * Right-to-left function composition
 * @module compose
 * @param  {...functions} fns Arguments as functions
 * @type {function}
 * @returns {function}
 */
const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg);

module.exports = compose;
