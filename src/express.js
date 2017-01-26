/**
 * Return RegExp object
 *
 * @param  {string} string Regular expression
 * @return {object}
 *
 * @function
 */
export const express = expression => {
  let flags = '';

  // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern
  if (/^\/.*\/(?:[gimy]*)$/.test(expression)) {
    // Replace the regexp literal string with the first match group: ([gimy]*)
    // If no flag is present, this will be a blank string
    flags = expression.replace(/.*\/([gimy]*)$/, '$1');
    // Again, replace the regexp literal string with the first match group:
    // everything excluding the opening and closing slashes and the flags
    expression = expression.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
  } else {
    // Anchor regexp:
    expression = '^' + expression + '$';
  }
  return (new RegExp(expression, flags));
};
