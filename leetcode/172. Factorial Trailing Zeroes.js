// Given an integer n, return the number of trailing zeroes in n!.
//
// Example 1:
//
// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:
//
// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0;
  for (let i = 5; Math.floor(n / i) > 0; i *= 5) {
    result += Math.floor(n / i);
  }
  return result;
};

var trailingZeroes = function(n) {
    let count = 0;
    let i = 5;
    while (i <= n) {
        count += Math.floor(n / i);
        i *= 5;
    }
    return count;
};

console.log(trailingZeroes(26));
