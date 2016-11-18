function truncate(str, num) {
  // Clear out that junk in your trunk
  var strLen = str.length;
  if (strLen === num || num > strLen) {
    return str;
  } else if (num <= 3) {
            str = str.substring(0, num);
            console.log(str);
            str += "...";
            return str;
  } else {
    str = str.substring(0, num - 3);
    str += "...";
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);