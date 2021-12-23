function fizzBuzz(start, end) {
  var result = [];
  for (let n = start; n <= end; n++){
    let x = n%3, y = n%5;
    if (x+y == 0){
      result.push('FizzBuzz');
    }
    else if (x==0){
      result.push('Fizz');
    }
    else if (y==0){
      result.push('Buzz');
    }
    else{
      result.push(n);
    }
  }
  return result;
}

// Do not edit this line;
module.exports = fizzBuzz;