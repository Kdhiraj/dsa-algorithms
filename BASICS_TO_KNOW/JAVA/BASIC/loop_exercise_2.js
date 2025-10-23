// 2. Write a function that returns number of negative numbers in an array

function countNegativeNumbers(arr) {
  //traverse an array and check each element if it is negative (<0) then increase count
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const arr = [3, 2, -1, -5, -6, 9, 8];
const result = countNegativeNumbers(arr);
console.log(result);
