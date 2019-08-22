const { groupBy, getAverage } = require('../../utils');

/**
 * Average posts number by user
 * @module avgPostLength
 * @param {Array} posts
 * @type {function}
 * @returns {number}
 */
const avgPostsPerUser = posts => {
  const users = groupBy(posts, 'from_id');
  const counts = Object.keys(users).map(key => users[key].length);
  return getAverage(counts) || 0;
};

module.exports = avgPostsPerUser;
