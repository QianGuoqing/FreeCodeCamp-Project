function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  var max = arr[0][0];
  for (var i = 0; i < arr.length; i++) {
     arr[i].sort(function(a, b) {
       return a - b;
     });
  }
  
  for (var j = 0; j < arr.length; j++) {
    maxArray.push(arr[j][3]);
  }
  
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
