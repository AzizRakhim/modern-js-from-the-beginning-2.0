/* 

My solutions

const myString = "developer";

const myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

const myStrings = "i am a developer";

const stringArray = myStrings.split(" ");

const myNewStrings = stringArray
  .map((el) => el[0].toUpperCase() + el.slice(1))
  .join(" ");

console.log(myNewStrings);

*/

// Tutor solution

const myString = "developer";

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
