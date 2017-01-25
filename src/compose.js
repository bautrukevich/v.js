/**
 * Compose function
 * @param  {array} funcs Array of functions to compose
 * @return {function} Returns new composite function
 */
export const compose = (funcs) => {
  const length = funcs ? funcs.length : 0;
  let index = length;

  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return function (...args) {
    let index = 0;
    let result = length ? funcs[index].apply(this, args) : args[0];

    while (++index < length) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
};
