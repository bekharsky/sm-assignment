const posts = require('../__mocks__/posts.json');
const getPostsOfMonth = require('./getPostsOfMonth');

test('Number of posts by month', () => {
  const result = getPostsOfMonth(posts, 5);
  expect(result.length).toBe(8);
});
