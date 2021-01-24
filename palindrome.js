function palindrome(str) {

    let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let reversedStr = newStr.split("").reverse().join("");
     
     if(newStr === reversedStr){
    alert(`${newStr} is a palindrome`)
    
     } else {
    alert(`${newStr} is NOT a palindrome`)
     }
  
  }
  
  
  


