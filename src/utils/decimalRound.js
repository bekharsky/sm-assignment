/**
 * Rounds a Decimal value to a specified number of decimal places
 * @module decimalRound
 * @param  {number} value A decimal number to round
 * @param  {number} decimals An integer value that specifies the number of decimal places to round to
 * @type {function}
 * @returns {number}
 */
const decimalRound = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

module.exports = decimalRound;
