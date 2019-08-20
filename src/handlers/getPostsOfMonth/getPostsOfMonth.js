/**
 * Filter posts of a given month
 * @module getPostsOfMonths
 * @param {Array} posts All fetched posts
 * @param {number} month Month to filter posts by
 * @type {function}
 * @returns {number}
 */
const getPostsOfMonth = (posts, month) => {
  return posts.filter(post => new Date(post.created_time).getMonth() === month);
};

module.exports = getPostsOfMonth;
