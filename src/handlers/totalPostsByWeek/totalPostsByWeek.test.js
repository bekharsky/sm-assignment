const posts = require('../__mocks__/posts.json');
const totalPostsByWeek = require('./totalPostsByWeek');

test('Total posts split by week', () => {
  const result = totalPostsByWeek(posts);
  expect(result).toEqual([
    { week: 22, totalPosts: 1 },
    { week: 23, totalPosts: 7 },
  ]);
});
