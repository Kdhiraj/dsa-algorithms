//Check string is pallindrom or not

// Pallindrom : When reverse the number or text and if it same is called pallindrom

//Reverse a string using loop
function reverseString(str, n) {
  let reverseStr = ""; //store the str so that we can match later
  //reverse the string
  for (let i = n - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr
}

//Reverse a string using two pointer and recursive 
function checkPalindrome(str, i) {
    if(i>=str.length/2) return true;
    if(str[i]!== str[str.length - i - 1]) return false;
    return checkPalindrome(str,i+1)
  }

const str = "madam";
// const str = "dhiraj"
const revString = reverseString(str, str.length);

if (str === revString) {
  console.log("It is pallindrom");
} else {
  console.log("Not pallindrome");
}

if(checkPalindrome(str, 0)){
    console.log("It is pallindrom");
}else{
    console.log("Not pallindrome");
}
