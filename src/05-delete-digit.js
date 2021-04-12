/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let min = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < array[i + 1]) {
      min = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (+array[i] === +min) {
      array.splice(i, 1);
    }
  }
  const num = array.join('');
  return +num;
}

module.exports = deleteDigit;
