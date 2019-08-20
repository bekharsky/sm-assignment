/**
 * @module getISOWeekNum
 * @param {Object} d JavaScript Date object
 * @returns {number} Week number
 * @description
 * For a given date, get the ISO week number
 *
 * Based on information at:
 * https://www.cl.cam.ac.uk/~mgk25/iso-time.html
 *
 * Algorithm is to find nearest thursday, it's year
 * is the year of the week number. Then get weeks
 * between that date and the first day of that year.
 *
 * Note that dates in one year can be weeks of previous
 * or next year, overlap is up to 3 days.
 *
 * e.g. 2014/12/29 is Monday in week  1 of 2015
 *      2012/1/1   is Sunday in week 52 of 2011
 */
const getISOWeekNum = d => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

  // Calculate full weeks to the nearest Thursday
  const n = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

  return n;
};

module.exports = getISOWeekNum;
