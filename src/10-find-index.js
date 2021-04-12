/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = Math.floor(array.length / 2);
  do {
    if (array[i] === value) {
      break;
    } else if (array[i] > value) {
      i--;
    } else {
      i += Math.floor((array.length + i) / 2) - 1;
    }
  } while (i < array.length);
  return i;
}

module.exports = findIndex;
