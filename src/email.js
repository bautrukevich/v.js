import { pattern } from './pattern';

/**
 * Check if value is valid e-mail
 *
 * @param {string} value E-mail
 * @returns {boolean}
 *
 * @function
 */
export const email = pattern('^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9]' +
  '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
  '(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');
