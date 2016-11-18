function repeat(str, num) {
  // repeat after me
  if (num < 0) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
  
  var temp = str;
    str = "";
  for (var i = 0; i < num; i++) {
    str += temp;
  }
  }
  return str;
}

repeat("abc", 3);