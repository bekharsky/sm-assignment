/**
 * Fetch helpers
 * @module request
 */
const fetch = require('cross-fetch');
const querystring = require('querystring');
const config = require('../config');
const cache = require('./cache');

const { baseURL } = config;

const fetchConfig = {
  mode: 'no-cors',
  cache: 'no-cache',
  redirect: 'follow',
  referrer: 'no-referrer',
};

/**
 * Resolve or reject promise based on response
 * @param {Promise} response
 * @type {function}
 * @returns {Promise}
 */
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

/**
 * Provide JSON form for the fetched response
 * @param {Promise} response
 * @type {function}
 * @returns {Promise}
 */
const json = response => {
  return response.json();
};

/**
 * Combine fetch helpers to ease work with JSON response
 * @param {string} url
 * @param {Object} config
 * @param {Object} config.qs Query params
 * @type {function}
 * @returns {Promise}
 */
const fetchJSON = (url, config) => {
  const token = cache.getItem('token') || '';
  const { qs } = config || {};
  qs.sl_token = token;

  return fetch(`${baseURL}/${url}?${querystring.stringify(qs)}`, {
    ...fetchConfig,
    ...config,
  })
    .then(status)
    .then(json)
    .catch(e => Promise.reject(e));
};

module.exports = {
  fetchConfig,
  status,
  json,
  fetchJSON,
};
