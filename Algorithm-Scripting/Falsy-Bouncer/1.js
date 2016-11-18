function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i]===false||arr[i]===null||arr[i]===0||arr[i]===""||arr[i]===undefined||(isNaN(arr[i]&&typeof arr[i] !== 'string')))) {
       newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);