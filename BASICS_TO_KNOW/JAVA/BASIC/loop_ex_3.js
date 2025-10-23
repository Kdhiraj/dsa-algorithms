//3. Write a function that return largest number in an array

function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length < 2) {
    return "array should be atleast two elements";
  }
  let largestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
//Write a function that returns smallest number in an array
function findSmallest(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length < 2) {
    return "array should be atleast two elements";
  }
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

//Write a function that returns second largest number in an array

function findSecondLargest(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length < 2) {
    return "array should be atleast two elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  //first find largest number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i]!== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Write a function that return the third larget number in an array
function findThirdLargest(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length < 2) {
    return "array should be atleast two elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;
  //first find largest number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      thirdLargest = arr[i];
    }
  }

  return thirdLargest;
}

let arr = [2, 4, 6, 43, 32, 54];
let arr2 = [-2, -4, -6, -43, -32];
const res = findLargest(arr2);
const res2 = findSmallest(arr);
const res3 = findSecondLargest([10,20,8,9,20,9]);
console.log("Largest Number:", res);
console.log("Largest Number:", findLargest([]));
console.log("Smallest Number:", res2);
console.log("Second largest Number:", res3);
console.log("Third largest Number:", findThirdLargest(arr));

//Note: Always have to think about corner cases
// ex: What if array is empty, array has negative numbers, array has duplicate element,array has only one element
//Always think are you missing any corner case?
