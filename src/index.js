import { alphanumeric } from './alphanumeric';
import { digits } from './digits';
import { email } from './email';
import { integer } from './integer';
import { number } from './number';
import { pattern } from './pattern';
import { phone } from './phone';

class Validator {
  constructor() {
    this.name = 'v.js';
    this.alphanumeric = alphanumeric;
    this.digits = digits;
    this.email = email;
    this.integer = integer;
    this.number = number;
    this.pattern = pattern;
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
}

export default Validator;
