const name = "dhiraj"; //string type
const count = 10; //number

const num1 = 10;
const num2 = 20;
console.log(num1 + num2);//30

//arrays
//array store value contigous in memory and we can acces it via index and index start from 0;
const arr = [10, 20, 30, 40];

console.log(arr); //print array
console.log(arr[0]); //print value which stored at first index
console.log(arr.length);//print no of elements stored in an array
//modify the array element
arr[0] = "dhiraj";
console.log(arr)
console.log(arr[0])

// In javascript we can store any datatype in an array it can contain mix of number, string, boolean, objects, array.

const mixElement = ["ram", "sham", true, { name: "dhiraj" }, 25];
console.log(mixElement)


//Object: In Javascript is key value pair


const user = {
    firstName: "ram",
    lastName: "kumar",
    age: 25,
    country: "India",
    hobbies: ["cricket", "travelling"],
}

console.log(user);
console.log(user.age); //to access object we use . or [keyname]
console.log(user["country"])
console.log(user.firstName + " " + user.lastName)




