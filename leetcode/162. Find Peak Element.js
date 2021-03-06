// A peak element is an element that is greater than its neighbors.
//
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
// You may imagine that nums[-1] = nums[n] = -∞.
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
//
// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
//              or index number 5 where the peak element is 6.
// Note:
//
// Your solution should be in logarithmic complexity.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      start = mid;
    } else if (nums[mid] < nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] > nums[end]) {
    return start;
  }
  return end;
};

//5.27 nums[mid] only need compare with nums[mid + 1]
// only needs to compare with its right to decide if it is up or down
var findPeakElement = function(nums) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    if (nums[mid] < nums[mid + 1]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] > target) {
    return start;
  }
  return end;
};
