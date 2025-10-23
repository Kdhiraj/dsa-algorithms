//Write a function that returns counts of digits in a number

function countDigits(num) {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    num = Math.abs(num);
  }
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
const num = -989978687;
const digits = countDigits(num);
console.log(`In ${num} there are ${digits} digits`);
