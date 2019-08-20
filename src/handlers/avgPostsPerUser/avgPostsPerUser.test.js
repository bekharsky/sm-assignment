const posts = require('../__mocks__/posts.json');
const avgPostsPerUser = require('./avgPostsPerUser');

test('Average number of posts per user', () => {
  const result = avgPostsPerUser(posts);
  expect(result).toBeCloseTo(1.143, 2);
});
