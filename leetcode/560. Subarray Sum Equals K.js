// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
//
// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  const map = new Map();
  map.set(0, 1);

  let count = 0;
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }
  return count;
};
