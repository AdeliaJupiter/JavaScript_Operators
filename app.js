console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(`a + b = ${add}\n
a - b = ${minus}\n
a * b = ${multiply}\n
a / b = ${dividing}`);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(`- What is the value of: num + str? ${num + str}\n
- What is the value of: num + str2? ${num + str2}\n
- What is the value of: num + isPresent? ${num + isPresent}\n
- What is the value of: firstName + num? ${firstName + num}\n
- What is the value of: isPresent + str? ${isPresent + str}\n
- What is the value of: firstName + lastName? ${firstName + lastName}`);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(`- What is the value of: val == str3? ${val == str3}\n
- What is the value of: val === str3? ${val === str3}\n
- What is the value of: !isAwake? ${!isAwake}\n
- What is the value of: ("eleven" == str4 && val >= str3)? ${"eleven" == str4 && val >= str3}\n
- What is the value of: (!isAwake || isAwake)? ${!isAwake || isAwake}\n
- What is the value of: 0 == false? ${0 == false}\n
- What is the value of: 0 === false? ${0 === false}\n
- What is the value of: 0 != false? ${0 != false}\n
- What is the value of 0 !== false? ${0 !== false}`);
