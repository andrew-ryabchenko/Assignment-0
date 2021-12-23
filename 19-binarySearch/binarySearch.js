class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let pivot = Math.floor(nums.length / 2);
    if (nums.length < 2){
      if (nums[0] == target){
        return true;
      }
      else{
        return false;
      }
    }

    if (nums[pivot] == target){
      return true;
    }
    else if (nums[pivot] < target){
      return this.binarySearch(nums.slice(pivot+1, nums.length), target);
    }
    else{
      return this.binarySearch(nums.slice(0, pivot), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;