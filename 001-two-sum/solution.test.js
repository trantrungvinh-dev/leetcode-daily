// twoSum.test.js
const twoSum = require("./solution");

// const twoSum = require("./two-sum");

test("returns correct indices for valid pair", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test("returns correct indices for another valid pair", () => {
  const nums = [3, 2, 4];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([1, 2]);
});

test("throws error when no valid pair exists", () => {
  const nums = [1, 2, 3];
  const target = 7;
  expect(() => twoSum(nums, target)).toThrow(
    "No valid pair found that adds up to the target."
  );
});

test("returns correct indices when pair includes negative numbers", () => {
  const nums = [-1, -2, -3, -4, -5];
  const target = -8;
  expect(twoSum(nums, target)).toEqual([2, 4]);
});

test("returns correct indices when the pair is the first and last elements", () => {
  const nums = [5, 1, 2, 3, 4];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 4]);
});

test("returns correct indices when input contains duplicates", () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test("returns correct indices when input contains zero", () => {
  const nums = [0, 4, 3, 0];
  const target = 0;
  expect(twoSum(nums, target)).toEqual([0, 3]);
});
