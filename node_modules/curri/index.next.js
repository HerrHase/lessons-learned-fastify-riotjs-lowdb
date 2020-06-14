/**
 * Function to curry any javascript method
 * @param   {Function}  fn - the target function we want to curry
 * @param   {...[args]} acc - initial arguments
 * @returns {Function|*} it will return a function until the target function
 *                       will receive all of its arguments
 */
export default function curry(fn, ...acc) {
  return (...args) => {
    args = [...acc, ...args]

    return args.length < fn.length ?
      curry(fn, ...args) :
      fn(...args)
  }
}