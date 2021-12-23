function productOfAnyAmountOfNumbers(...args) {
  return args.reduce((prev, current)=>{
    return prev * current;
  })
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;