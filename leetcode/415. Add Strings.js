// Given two non-negative integers num1 and num2 represented as string,
// return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = "";

  let carry = 0;

  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let digit = 0;
    if (i >= 0) {
      digit += parseInt(num1[i]);
      i--;
    }
    if (j >= 0) {
      digit += parseInt(num2[j]);
      j--;
    }

    digit += carry;
    result = (digit % 10) + result;

    carry = Math.floor(digit / 10);
  }
  return result;
};

console.log(addStrings("11", "999"))
