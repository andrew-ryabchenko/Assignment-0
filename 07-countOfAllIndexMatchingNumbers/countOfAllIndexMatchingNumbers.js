function countOfAllIndexMatchingNumbers(nums) {
  for (var i = 0, r = 0; i < nums.length; i++){
    (nums[i] == i) ? r++ : r;
  }
  return r;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;