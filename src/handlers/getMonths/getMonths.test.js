const posts = require('../__mocks__/posts.json');
const getMonths = require('./getMonths');

test('Average character length in post by month', () => {
  const result = getMonths(posts);
  expect(result).toEqual([5]);
});
