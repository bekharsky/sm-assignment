const { fetchJSON } = require('../utils').request;

/**
 * Fetch posts by a given page
 * @module fetchPosts
 * @param {number} page Page to fetch
 * @type {function}
 * @returns {Array}
 */
const fetchPosts = page => {
  return fetchJSON('posts', { qs: { page } })
    .then(({ data }) => data.posts)
    .catch(e => Promise.reject(e));
};

module.exports = fetchPosts;
