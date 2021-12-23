function countOfAllBooleansAndStrings(arr) {
  var count = 0;
  for (let obj of arr){
    if ((typeof obj == 'boolean') || (typeof obj == 'string')){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;