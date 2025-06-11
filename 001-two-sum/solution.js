// twoSum.js
/**
 * Finds two indices such that the numbers at those indices add up to the target.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} Indices of the two numbers such that they add up to target.
 * @throws Error if no valid pair exists.
 */
module.exports = function twoSum(nums, target) {
  const seen = new Map(); // Maps number to its index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  throw new Error("No valid pair found that adds up to the target.");
};
