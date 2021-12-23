function titleCaseEdit(title) {
  var result = title.charAt(0).toUpperCase();
  var space = false;
  for (let i = 1; i < title.length; i++){
    c = title.charAt(i);
    if (space){
      if (c.charCodeAt(0) > 96){
        result += String.fromCharCode(c.charCodeAt(0) - 32);
      }
      else{
        result += c;
      }
    }
    else{
      result += c;
    }
    space = (c.charCodeAt(0) == 32) ? true : false;
  }
  return result;
}
// Do not edit this line;
module.exports = titleCaseEdit;