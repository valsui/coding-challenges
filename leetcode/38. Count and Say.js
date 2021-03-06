// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.
//
// Example 1:
//
// Input: 1
// Output: "1"
// Example 2:
//
// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 */

function countAndSay(n) {
  if (n === 1) return "1";

  let cur = "1";

  for (let i = 2; i <= n; i++) {
    let prev = cur;
    cur = "";
    let count = 1;
    let say = prev[0];

    for (let j = 1; j < prev.length; j++) {
      if (prev[j] !== say) {
        cur = cur + count + say;
        count = 1;
        say = prev[j];
      } else {
        count++;
      }
    }
    cur = cur + count + say;
  }
  return cur;
}

var countAndSay = function(n) {
    if (n <= 0) {
        return null;
    }
    let i = 1;
    let result = "1";
    while (i < n) {
        let say = result[0];
        let count = 1;
        let curr = "";
        for (let j = 1; j < result.length; j++) {
            if (result[j] !== say) {
                curr += String(count) + say;
                say = result[j];
                count = 1;
            } else {
                count++;
            }
        }
        result = curr + String(count) + say;
        i++;
    }
    return result;
};


console.log(countAndSay(5))

// var countAndSay2 = function(n) {
//   if (n === 1) {
//     return "1";
//   }
//
//   let cur = "1";
//
//   for (let i = 2; i <= n; i++) {
//     let prev = cur;
//     cur = "";
//     let count = 1;
//     let say = prev[0];
//     for (let j = 1; j < prev.length; j++) {
//       if (prev[j] !== say) {
//         cur = cur + count + say;
//         count = 1;
//         say = prev[j];
//       } else {
//         count++;
//       }
//     }
//     cur = cur + count + say;
//   }
//   return cur;
// };
