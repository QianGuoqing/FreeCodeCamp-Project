function palindrome(str) {  
  var arra = str.replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,"").replace(/\W/g,"");  
  var arrd = arra.toLocaleLowerCase().split("");  
  var arr = arrd.toString();  
  var arrr = arrd.reverse().toString();  
  if (arr === arrr){  
    return true;  
  } else {  
    return false;  
  }  
}  
palindrome("eye");  
