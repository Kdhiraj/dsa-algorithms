//function: function is a block of code which is used to write some logic and using function we can reuse it by calling the function

//In Javascript we can create function using funciton keyword along with function name

function printName() {
  const firstName = "Dhiraj";
  const lastName = "Kumar";
  console.log(firstName + " " + lastName);
}

printName(); // to call the function we just use the function name

//sum of two number
//it will take two argument
function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return num * num;
}

console.log(sum(53, 343)); //passing the parameter to function
console.log(sub(5, 2)); //passing the parameter to function
console.log(multiply(2, 2)); //passing the parameter to function
console.log(square(4)); //passing the parameter to function

//create a function that check person is eligible to vote or not

function checkEligibility(age) {
  const votingAge = 18;
  if (age >= votingAge) {
    return true;
  } else {
    return false;
  }
}

let isEligibleToVote = checkEligibility(17);
console.log(isEligibleToVote);
//Ternary operator
isEligibleToVote = checkEligibility(19)
  ? "Eligible to Vote"
  : "Not Eligible to Vote";

console.log(isEligibleToVote);

// create a function that check number is even or odd

//Even number are those number which divide by 2

function isEvenOrOdd(num) {
  const rem = num % 2;
  if (rem === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

isEvenOrOdd(6);
isEvenOrOdd(7)
