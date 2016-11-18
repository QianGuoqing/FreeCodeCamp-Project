function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var arrLen = arr.length;
  if (arrLen < howMany) {
    return [];
  } else if (howMany === 0) {
    return arr;
  }else {
    for (var i = 0; i < howMany; i++) {
      arr.shift();
    }
  }
  return arr;
}

slasher([1, 2, 3], 2);