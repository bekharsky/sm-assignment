const { groupBy, getISOWeekNum } = require('../../utils');

/**
 * Total posts number split by week
 * @module totalPostsByWeek
 * @param {Array} posts
 * @type {function}
 * @returns {number}
 */
const totalPostsByWeek = posts => {
  const criteria = post => {
    const date = new Date(post.created_time);
    return getISOWeekNum(date);
  };

  const weeks = groupBy(posts, criteria);

  return Object.keys(weeks).map(key => ({
    week: +key,
    totalPosts: weeks[key].length,
  }));
};

module.exports = totalPostsByWeek;
