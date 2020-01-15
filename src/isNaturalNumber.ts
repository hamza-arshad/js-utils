/**
 * Checks if a value is a natural number,
 * i.e. is an integer greater than zero
 */
export default (num: any): num is number =>
  Number.isInteger(num) && num > 0
