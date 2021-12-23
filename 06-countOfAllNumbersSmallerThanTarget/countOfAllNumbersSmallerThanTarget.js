function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = 0;
  for(let n of nums){
    (n < target) ? count++ : count;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;