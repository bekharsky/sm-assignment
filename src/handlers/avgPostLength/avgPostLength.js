const { getAverage } = require('../../utils');

/**
 * Average post length from a given array of posts
 * @module avgPostLength
 * @param {Array} posts Array of posts
 * @type {function}
 * @return {number}
 */
const avgPostLength = posts => {
  const counts = posts.map(post => post.message.length);
  return getAverage(counts);
};

module.exports = avgPostLength;
