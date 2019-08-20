const { cache } = require('../utils');
const fetchToken = require('./fetchToken');
const fetchAllPosts = require('./fetchAllPosts');

/**
 * Fetch or get cached posts from previous fetches, refresh token if necessary
 * @module getPosts
 * @type {function}
 * @returns {Array}
 */
const getPosts = async () => {
  const token = cache.getItem('token') || '';
  if (!token) {
    console.log('Token: cache miss');
    cache.setItem('token', await fetchToken());
  }

  const posts = cache.getItem('posts') || [];
  if (posts.length > 0) {
    return posts;
  } else {
    console.log('Posts: cache miss');
    return fetchAllPosts()
      .then(posts => {
        cache.setItem('posts', posts);
        return posts;
      })
      .catch(e => {
        console.log(e);
        cache.setItem('token', '');
        return getPosts();
      });
  }
};

module.exports = getPosts;
