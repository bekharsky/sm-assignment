const { groupBy } = require('../../utils');

/**
 * Ordered numbers of months with posts presented
 * @module getMonths
 * @param {Array} posts
 * @type {function}
 * @returns {number}
 */
const getMonths = posts => {
  const criteria = post => new Date(post.created_time).getMonth();
  const months = groupBy(posts, criteria);
  return Object.keys(months).map(key => +key);
};

module.exports = getMonths;
