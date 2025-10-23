//loop is used to perform repetitive task

for (let i = 0; i < 10; i++) {
  console.log(`Sr.no: ${i + 1}, Hello world`);
}

//print odd number
let i = 1;
while (i < 10) {
  console.log(i);
  i = i + 2;
}

//print even number

for (let i = 2; i <= 100; i = i + 2) {
  console.log(i);
}

for (let i = 5; i > 0; i--) {
  console.log("Hello world", i);
}
// //infinite loop
// for(let i =1;i>0;i++){
//     console.log("hello world",i)
// }

//print all even number of an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
console.log(arr.length);
let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum = sum + arr[i];
    console.log("Even number", arr[i]);
}
}

console.log("sum of even number", sum)
