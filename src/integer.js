import { pattern } from './pattern';

/**
 * Check if value is integer
 *
 * @param {integer} value
 * @returns {boolean}
 *
 * @function
 */
export const integer = pattern('/^-?\\d+$/');
