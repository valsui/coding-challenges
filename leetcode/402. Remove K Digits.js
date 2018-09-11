// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
//
// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:
//
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:
//
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:
//
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];
  let i = 0;
  while (i < num.length) {
    while (k > 0 && stack.length !== 0 && Number(num[i]) < stack[stack.length -1]) {
      stack.pop();
      k--;
    }
    stack.push(Number(num[i]));
    i++;
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = "";
  while (stack.length > 0) {
    result = stack.pop() + result;
  }

  while (result.length > 0 && result[0] === '0') {
    result = result.slice(1);
  }

  return result === "" ? "0" : result; 
};
