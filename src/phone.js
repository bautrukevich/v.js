import { isValidNumber } from 'libphonenumber-js';

/**
 * Check if phone number is valid
 * @param  {string} number Phone number
 * @return {boolean}
 */
export const phone = number => isValidNumber(number);
