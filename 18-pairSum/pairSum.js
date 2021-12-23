function pairSum(nums, target) {
  if (nums.length < 2){
    throw new Error('nums contain less then 2 elements');
  }
  for (let i = 0; i < nums.length; i++){
    let x = nums[i];
    for (let j = i; j < nums.length; j++){
      let y = nums[j];
      if (j == i){
        continue;
      }
      if (x+y == target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;