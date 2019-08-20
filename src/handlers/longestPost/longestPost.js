/**
 * Return longest posts from a given array of posts
 * @module longestPost
 * @param {Array} posts
 * @type {function}
 * @returns {number}
 */
const longestPost = posts => {
  return Math.max.apply(Math, posts.map(post => post.message.length));
};

module.exports = longestPost;
