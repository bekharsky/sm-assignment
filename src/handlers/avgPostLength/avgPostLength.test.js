const posts = require('../__mocks__/posts.json');
const avgPostLength = require('./avgPostLength');

test('Average character length by post', () => {
  const result = avgPostLength(posts);
  expect(result).toBeCloseTo(361.125, 2);
});
