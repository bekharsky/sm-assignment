const config = require('../config');
const fetchPosts = require('./fetchPosts');

const { totalPages } = config;

/**
 * Fetch all posts by configured number of pages
 * @module fetchAllPosts
 * @type {function}
 * @returns {Array}
 */
const fetchAllPosts = () => {
  const promises = [];

  for (let i = 1; i <= totalPages; i++) {
    promises.push(fetchPosts(i));
  }

  return Promise.all(promises)
    .then(results => results.reduce((acc, item) => acc.concat(item), []))
    .catch(e => Promise.reject(e));
};

module.exports = fetchAllPosts;
