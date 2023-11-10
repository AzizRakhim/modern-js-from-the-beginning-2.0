// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

// console.log(30); error -> cannot access age before initialization;
let age = 30;

// console.log(ageWithVar); -> undefined. Accessed before initialization
var ageWithVar = 30;

console.log(age);

/*
Naming Conventions
- Only letters, numbers, underscores and dollar signs
- Can't start with a number
*/

// let 1name = 'Aziz' -> error. Can't start with a number

let name1 = "Aziz";

// let name1+ = 'Aziz'; -> error. Can't add + signs

/*
Multi-word formatting
- firstName = camelCase
- first_name = underscore
- FirstName = PascalCase
- firstname = lowercase
*/

// Re-assigning variables

age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// x = 200; -> error. Can't reassign constants

// const score1; -> error. Must give value to const initializations

const arr = [1, 2, 3, 4];

// arr = [1, 2, 3, 4, 5]; -> error. Can't directly reassign const arrays

arr.push(5);

console.log(arr);

const person = { name: "Aziz" };

// person = { name: "John" }; -> error. Can't directly reassign const objs

// Not directly changing obj, just its property
person.name = "John";

person.email = "azizrakhim17@gmail.com";

console.log(person);

// Declaring multiple variables at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);

// undefined
console.log(a);
