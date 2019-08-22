/**
 * Computes the average of an array
 * @module getAverage
 * @param  {Array} arr An array to get average from
 * @type {function}
 * @returns {number}
 */
const getAverage = arr => {
  if (!arr.length) {
    return false;
  }

  return arr.reduce((sum, item) => sum + item, 0) / arr.length;
};

module.exports = getAverage;
