import { check } from './check';
import { express } from './express';

/**
 * Check if value is match RegExp. It's an alias now for check()
 *
 * @param {string} expression
 * @returns {function}
 *
 * @function
 */
export const pattern = expression => check(express(expression));
