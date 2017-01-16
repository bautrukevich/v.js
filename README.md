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
- pattern (regular expression).

```js

import { v as isValid } from './v';

isValid.email('mail@mail.com');
// true

isValid.email('@mail.com');
// false

```
