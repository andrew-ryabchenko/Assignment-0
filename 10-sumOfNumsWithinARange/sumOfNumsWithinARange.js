function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;
  for (let n of nums){
    if ((start <= n) && (n <= end)){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;