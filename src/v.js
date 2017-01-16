/**
 * Check if value is valid e-mail
 *
 * @param {string} value
 * @returns {boolean}
 */
export const email = (value) => {
  const EMAIL = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

  return (new RegExp(EMAIL)).test(value);
};

/**
 * Check if value is number
 *
 * @param {integer} value
 * @returns {boolean}
 */
export const number = (value) => {
  const NUMBER = /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i;

  return (new RegExp(NUMBER)).test(value);
};

/**
 * Check if value is integer
 *
 * @param {integer} value
 * @returns {boolean}
 */
export const integer = (value) => {
  const INTEGER = /^-?\d+$/;

  return (new RegExp(INTEGER)).test(value);
};

/**
 * Check if value is digits
 *
 * @param value
 * @returns {boolean}
 */
export const digits = (value) => {
  const DIGITS = /^\d+$/;

  return (new RegExp(DIGITS)).test(value);
};

/**
 * Check if value is alphanumeric
 *
 * @param {string} value
 * @returns {boolean}
 */
export const alphanumeric = (value) => {
  const ALPHANUMERIC = /^\w+$/i;

  return (new RegExp(ALPHANUMERIC)).test(value);
};

/**
 * Check if value is valid URL
 *
 * @param {string} value
 * @returns {boolean}
 */
export const url = (value) => {
  return (new RegExp(
    '^' +
    // protocol identifier
    '(?:(?:https?|ftp)://)?' + // ** mod: make scheme optional
    // user:pass authentication
    '(?:\\S+(?::\\S*)?@)?' +
    '(?:' +
    // IP address exclusion
    // private & local networks
    // '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +   // ** mod: allow local networks
    // '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +  // ** mod: allow local networks
    // '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +  // ** mod: allow local networks
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
    '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
    '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    '|' +
    // host name
    '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
    // domain name
    '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
    // TLD identifier
    '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
    ')' +
    // port number
    '(?::\\d{2,5})?' +
    // resource path
    '(?:/\\S*)?' +
    '$', 'i'
  )).test(value);
};
