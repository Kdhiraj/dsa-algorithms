//1. Write a function that search for an element in an array and return the index, if the element is not found then return -1

function searchElement(arr, num) {
  //will traverse the array and check that number exist or not till end of the array if element match with pass parameter then return the index otherwise return -1
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) { 
      return i;
    }
  }
  return -1;
}


const arr = [2,3,5,4,53,23]
const num = 5;
const message = searchElement(arr, num) === -1 ? `${num} is not found in array: ${arr}` : `${num} present at index`
console.log(`Element present at index: `,searchElement(arr, num))



