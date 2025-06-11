"-" là kỳ vọng,
"+" là thực tế trả về.

# Two Sum

This module provides a solution to the classic "Two Sum" problem.

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

If no such pair exists, the function throws an error.

## Usage

```js
const twoSum = require("./two-sum");

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
```

## Approach

The function uses a hash map to store the complement of each number. For each number, it checks if the complement exists in the map. If it does, it returns the indices of the current number and the complement. If it doesn't, it adds the current number to the map.

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)

## Test Cases

```js
const twoSum = require("./two-sum");
```
# leetcode-daily
