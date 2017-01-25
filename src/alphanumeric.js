import { pattern } from './pattern';

/**
 * Check if value is alphanumeric
 *
 * @param {string} value
 * @returns {boolean}
 */
export const alphanumeric = pattern('/^\\w+$/', 'i');
