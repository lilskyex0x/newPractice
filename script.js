// loop

// for (let i = 0; i < 10; i++) {
//   console.log(`I is ${i}`);
// }

// const person = ["Peter", "Mony", "John"];
// console.log(person);

// for (let i = 0; i < person.length; i++) {
//   console.log(person[i]);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     // break;
//     continue;
//   }

//   console.log(`i is ${i}`);
// }
// -----------------------------------------------
// While loops
// let j = 0;
// while (j < 10) {
//   console.log(`j is ${j}`);
//   j++; this will increment by 1 or
//   j = j + 2; this will increment by 2
// }
// ------------------------------------------------
// do while loop
// let k = 0;

// do {
//   console.log(`k is ${k}`);   this condition in curly braces always do once
//   k++;
// } while (k < 10);
// ------------------------------------------------
// for in loops (used to loop over the keys of an object)

// const person = {
//     firstName: 'Andre',
//     lastName: 'mab',
//     job: 'Web Developer',
// };

// for ( const x in person) {      (x is the keys to the object)
//     console.log(person[x]);
// }
// ---------------------------------------------------
// for of loop ( for of loops are used for iterable types like arrays)

const people = ["Apk", "lilsnow", "kz"];

// for (const y of people) {   // y is the items of people array
//     console.log(y);
// }
// -----------------------------------------------------
// forEach (is a method on the array object)

// people.forEach((person, index) => {
//   console.log(`Index is ${index} : person is ${person}`);
// }); // this take a callback function as a parameter
// -----------------------------------------------------

// map (this returns a new array so save that in variable. it's a method that lives on arrays)
// const peopleMap = people.map((person, index) => {
//     return `${index} is ${person}`
// })

// console.log(peopleMap)

// ----------------------------------------------------------------------

// Scopes

// Global Scope
// let message = "hello"; // let and const doesn't attach to the global window object
// var greeting = "hi"; // global scope variable can also be use using browser dev tool. Var is actually attached to the global window object

// console.log(message, greeting);

// if (true) {
//     console.log(message, greeting)
// }
// --------------------------------------------------------------

// Function Scope
// function sayHello() {
//   let message = "hello"; // function scope bot var and let variables
//   var greeting = "hi"; // are only available in the scope that they
//   // are declared

//   console.log(message, greeting); // this will work

//   return message;
// }

// // this will work because of return in function. if varible is not returned to the outside of the func scope, can't use this.
// let hello = sayHello();
// console.log(hello);
// -------------------------
// function sayHi() {
//   let greeting = "hi";
//   var goodBye = "Sayonara";

//   console.log(greeting, goodBye);

//   function nested() {
//     console.log(greeting, goodBye)   // can use variable within scope are still can use in nested func;
//   }
//   nested()
// }

// sayHi();
// -------------------------------------------------------------
// Block Scope

// if (true) {
//   let message = "hello";
//   var greeting = "hi";

//   console.log(message, greeting);
// }

// console.log(greeting);
// -----------------------------------
// for (var i = 0; i < 5; i++) {
//     console.log(`i is ${i}`);
// }

// console.log(i);
// ----------------------------
// const alert = "error";

// alert("hi");
// ----------------------
// (function () {
//     const alert = 'error'
//     console.log(alert);
// })();

// alert('hi') // this will work

// ------------------------------------------------------------------

// Pass by value or pass by reference

/* 
Primitive Types - Pass by value 

    - Strings
    - Number
    - Bigint
    - Boolean
    - Null and Underfined
    - Symbol
    
Reference Types - Pass by reference
    
    - Arrays
    - Objects
    - Functions

*/

// pass by value
let a = "hi";
let b = a;
b = b + " there";

// Mental Model
// a : 'hi'
// b : 'hi there'

console.log(a);
console.log(b);

let c = [1,2];
let d = c;
d.push(3);

// mental model
// c : [1,2]
// d : [1,2]

console.log(c);
console.log(d);