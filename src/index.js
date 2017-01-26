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
     * Check if value is valid alphanumeric
     * @type {function}
     */
    this.alphanumeric = alphanumeric;

    /**
     * Check if value is valid digits
     * @type {function}
     */
    this.digits = digits;

    /**
     * Check if value is valid e-mail
     * @type {function}
     */
    this.email = email;

    /**
     * Check if value is valid integer
     * @type {function}
     */
    this.integer = integer;

    /**
     * Check if value is valid number
     * @type {function}
     */
    this.number = number;

    /**
     * Check if value is validated by pattern
     * @type {function}
     */
    this.pattern = pattern;

    /**
     * Check if value is valid phone number
     * @type {function}
     */
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
}

export default Validator;
