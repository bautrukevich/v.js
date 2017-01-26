import { alphanumeric } from './alphanumeric';
import { digits } from './digits';
import { email } from './email';
import { integer } from './integer';
import { number } from './number';
import { pattern } from './pattern';
import { phone } from './phone';

/**
 * Simple validation library
 *
 * @example
 * const isValid = new Validator();
 * isValid.email('mail@mail.com'); // true
 */
class Validator {
  constructor() {
    this.name = 'v.js';

    /**
     * Check if value is alphanumeric
     *
     * @param {string} value Alphanumeric value
     * @returns {boolean} true || false
     *
     * @example
     * alphanumeric('string123'); // true
     *
     * @method
     */
    this.alphanumeric = alphanumeric;

    /**
     * Check if value is valid digits
     *
     * @param {object} expression Digits
     * @returns {boolean} true || false
     *
     * @method
     */
    this.digits = digits;

    /**
     * Check if value is valid e-mail
     *
     * @param {string} value E-mail
     * @returns {boolean}
     *
     * @method
     */
    this.email = email;

    /**
     * Check if value is integer
     *
     * @param {integer} value Integer
     * @returns {boolean} true || false
     *
     * @method
     */
    this.integer = integer;

    /**
     * Check if value is number
     *
     * @param {integer} value Number
     * @returns {boolean} true || false
     *
     * @method
     */
    this.number = number;

    /**
     * Check if value is match RegExp. It's an alias now for check()
     *
     * @param {string} expression RegExp expression
     * @returns {function}
     *
     * @method
     */
    this.pattern = pattern;

    /**
     * Check if phone number is valid
     *
     * @param  {string} number Phone number
     * @returns {boolean} true || false
     *
     * @method
     */
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
}

export default Validator;
