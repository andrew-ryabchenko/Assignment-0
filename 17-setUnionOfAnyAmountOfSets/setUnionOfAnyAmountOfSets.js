function setUnionOfAnyAmountOfSets(...args) {
  return args.reduce((prev, current) => {
    var result = new Set();
    for (let n of prev){
      result.add(n);
    }
    for (let n of current){
      if (!result.has(n)){
        result.add(n);
      }
    }
    return result;
  });
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;