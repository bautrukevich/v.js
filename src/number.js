import { pattern } from './pattern';

/**
 * Check if value is number
 *
 * @param {integer} value
 * @returns {boolean}
 *
 * @function
 */
export const number = pattern('/^-?(\\d*\\.)?\\d+(e[-+]?\\d+)?$/', 'i');
