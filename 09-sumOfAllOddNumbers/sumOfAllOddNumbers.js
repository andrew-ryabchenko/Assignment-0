function sumOfAllOddNumbers(nums) {
  var count = 0;
  for (let n of nums){
    (n%2 > 0) ? count++ : 0;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;