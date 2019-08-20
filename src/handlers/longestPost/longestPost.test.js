const posts = require('../__mocks__/posts.json');
const longestPost = require('./longestPost');

test('Longest post by character length', () => {
  const result = longestPost(posts);
  expect(result).toBe(548);
});
