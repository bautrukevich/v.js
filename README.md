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

Usage from source (not published at npm yet):

```js

import { Validator } from './src/index';

const isValid = new Validator();

isValid.email('mail@mail.com');
// true

isValid.email('@mail.com');
// false

```

Usage from dist:

```js

var isValid = new v();

isValid.email('mail@mail.com');
// true

isValid.email('@mail.com');
// false

```
