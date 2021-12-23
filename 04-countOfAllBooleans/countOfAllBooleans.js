function countOfAllBooleans(arr) {
  var count = 0;
  for (let obj of arr){
    if (typeof obj == 'boolean'){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;