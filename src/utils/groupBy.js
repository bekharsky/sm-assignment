/**
 * @module groupBy
 * @param {Array} arr The array to group items from
 * @param {string|function} criteria The criteria to group by
 * @type {function}
 * @return {Object} The grouped object
 * @description
 * Group items from an array together by some criteria or value
 *
 * &copy; 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License.
 */
const groupBy = (arr, criteria) => {
  return arr.reduce(function(obj, item) {
    // Check if the criteria is a function to run on the item or a property of it
    var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

    // If the key doesn't exist yet, create it
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }

    // Push the value to the object
    obj[key].push(item);

    // Return the object to the next item in the loop
    return obj;
  }, {});
};

module.exports = groupBy;
