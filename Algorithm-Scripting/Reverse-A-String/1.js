function reverseString(str) {
  var strArray = str.split(' ');
  var subStrArray = [];
  if (strArray.length > 1) {
    strArray = strArray.reverse();
    for (var i = 0; i < strArray.length; i++) {
        subStrArray = strArray[i].split('');
        subStrArray = subStrArray.reverse();
        strArray[i] = subStrArray.join('');
    }
    str = strArray.join(' ');
  } else {
    strArray = str.split('');
    strArray = strArray.reverse();
    str = strArray.join('');
  }
  return str;
}

reverseString("hello");
