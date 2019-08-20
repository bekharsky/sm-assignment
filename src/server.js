/**
 * Imitates real-world application
 * @module server
 */
const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const config = require('./config');
const monthNames = require('./constants');
const { decimalRound, pipe } = require('./utils');
const { getPosts } = require('./api');
const {
  avgPostLength,
  avgPostsPerUser,
  longestPost,
  totalPostsByWeek,
  getMonths,
  getPostsOfMonth,
} = require('./handlers');

const { port } = config;

// Create a simple node server
const server = http.createServer().listen(port, () => {
  console.log(`server start at port ${port}`);
});

// Simplest router implementation
server.on('request', async (req, res) => {
  const method = req.method;
  const currURL = url.parse(req.url);
  const pathname = currURL.pathname;
  const query = querystring.parse(currURL.query);

  // Chrome always begs for a favicon
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
  } else if (method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let posts = [];

    try {
      posts = await getPosts();
    } catch (e) {
      console.log(e);
    }

    const months = getMonths(posts);

    // Use EJS as template engine for our view solution
    const template = fs.readFileSync(__dirname + '/views/index.ejs', 'utf8');
    const view = ejs.render(template, {
      filename: 'main.ejs',
      months,
      monthNames,
    });

    res.write(view);
    res.end();
  } else if (method === 'GET' && pathname === '/stats/monthly') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let posts = [];

    try {
      posts = await getPosts();
    } catch (e) {
      console.log(e);
    }

    const result = {};

    if (query.month) {
      const month = parseInt(query.month, 10);
      const postsOfMonth = getPostsOfMonth(posts, month);

      result.month = month;

      // Consolidate all available metrics
      result.metrics = pipe(
        acc =>
          acc.concat({
            label: 'Average character length',
            value: decimalRound(avgPostLength(postsOfMonth), 2),
          }),
        acc =>
          acc.concat({
            label: 'Average number of posts per user',
            value: decimalRound(avgPostsPerUser(postsOfMonth), 2),
          }),
        acc =>
          acc.concat({
            label: 'Longest post by character length',
            value: decimalRound(longestPost(postsOfMonth), 2),
          })
      )([]);
    }

    res.write(JSON.stringify(result));
    res.end();
  } else if (method === 'GET' && pathname === '/stats/year') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let posts = [];

    try {
      posts = await getPosts();
    } catch (e) {
      console.log(e);
    }

    // Get total posts split by week from all available posts
    const result = totalPostsByWeek(posts);

    res.write(JSON.stringify(result));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Page Not Found</h1>');
    res.end();
  }
});
