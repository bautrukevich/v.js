import { pattern } from './pattern';

/**
 * Check if value is valid URL
 *
 * @param {string} value
 * @returns {boolean}
 *
 * @function
 */
export const url = pattern('^(?:\\w+:)?\\/\\/([^\\s\\.]+\\.\\S{2}|localhost[\\:?\\d]*)\\S*$');
