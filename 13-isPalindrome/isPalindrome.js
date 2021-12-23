function isPalindrome(word) {
  let len = word.length;
  if (len <= 2){
      if (word[0] == word[len-1]){
          return true;
      }
      else{
          return false;
      }
  }
  if (word[0] == word[len-1]){
    return isPalindrome(word.substring(1, len-1));
  }
  else{
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;