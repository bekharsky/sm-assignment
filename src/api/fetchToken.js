const fetch = require('cross-fetch');
const config = require('../config');
const { fetchConfig, status, json } = require('../utils').request;

const { baseURL, clientID, email, name } = config;

const credentials = {
  client_id: clientID,
  email,
  name,
};

/**
 * Get a new token
 * @module fetchToken
 * @type {function}
 * @returns {Array}
 * @see request
 */
const fetchToken = async () => {
  const endpoint = `${baseURL}/register`;

  const response = await fetch(endpoint, {
    ...fetchConfig,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(status)
    .then(json)
    .catch(e => console.log(e));

  const {
    data: { sl_token: token },
  } = response;

  return token;
};

module.exports = fetchToken;
