import { pattern } from './pattern';

/**
 * Check if value is alphanumeric
 *
 * @param {string} value Alphanumeric value
 * @returns {boolean} true || false
 *
 * @example
 * alphanumeric('string123'); // true
 *
 * @function
 */
export const alphanumeric = pattern('/^\\w+$/', 'i');
