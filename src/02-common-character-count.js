/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = Array.from(s1);
  const array2 = Array.from(s2);
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) !== -1) {
      result++;
      array2.splice(array2.indexOf(array1[i]), 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
