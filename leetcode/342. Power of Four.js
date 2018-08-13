// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example 1:
//
// Input: 16
// Output: true
// Example 2:
//
// Input: 5
// Output: false
// Follow up: Could you solve it without loops/recursion?
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
};
