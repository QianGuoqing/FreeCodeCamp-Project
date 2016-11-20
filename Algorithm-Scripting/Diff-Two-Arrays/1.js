function diff(arr1, arr2) {  
  var newArr = [];  
  var arr3 = [];  
  for (var i=0;i<arr1.length;i++) {  
    if(arr2.indexOf(arr1[i]) === -1)     
      arr3.push(arr1[i]);  
  }  
   var arr4 = [];  
  for (var j=0;j<arr2.length;j++) {  
    if(arr1.indexOf(arr2[j]) === -1)  
      arr4.push(arr2[j]);  
  }  
   newArr = arr3.concat(arr4);  
  return newArr;  
}  

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
