/**
 * Computes the average of an array
 * @module getAverage
 * @param  {Array} arr An array to get average from
 * @type {function}
 * @returns {number|boolean} Returns boolean false if it's an empty array
 */
const getAverage = arr => {
  if (!arr.length) {
    return false;
  }

  return arr.reduce((sum, item) => sum + item, 0) / arr.length;
};

module.exports = getAverage;
