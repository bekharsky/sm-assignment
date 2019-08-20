/**
 * Represents simple persistent storage
 * @module cache
 */

const db = {};

const cache = {
  getItem: key => db[key],
  setItem: (key, value) => {
    db[key] = value;
    return value;
  },
};

module.exports = cache;
