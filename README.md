# v.js

Tiny library (set of functions) for validation.

## Usage

Available list of validators:
- email;
- number;
- integer;
- digits;
- alphanumeric;
- url;
- pattern (regular expression);
- phone.

```js

import { Validator } from './src/index';

const isValid = new Validator();

isValid.email('mail@mail.com');
// true

isValid.email('@mail.com');
// false

```
