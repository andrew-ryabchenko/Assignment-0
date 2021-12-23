function frequencyCounter(word) {
  var result = {};
  for (let c of word){
    if (!(c in result)){
      result[c] = 1;
    }
    else{
      result[c] += 1;
    }
  }
  return result;
}

// Do not edit this line;
module.exports = frequencyCounter;