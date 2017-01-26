/**
 * Check if value is valid by RegExp
 *
 * @param {object} expression RegExp object
 * @returns {function}
 *
 * @function
 */
export const check = expression => value => expression.test(value);
