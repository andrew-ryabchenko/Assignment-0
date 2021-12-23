function sumOfAllEvenNumbers(nums) {
  var count = 0;
  for (let n of nums){
    (n%2 > 0) ? 0 : count++;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;