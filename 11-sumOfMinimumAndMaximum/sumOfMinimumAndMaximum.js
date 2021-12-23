function sumOfMinimumAndMaximum(nums) {
  var lowest = nums[0];
  var highest = nums[0];
  for (let n of nums){
    if (n > highest){
      highest = n;
    }
    if (n < lowest){
      lowest = n;
    }
  }
  return lowest+highest;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;