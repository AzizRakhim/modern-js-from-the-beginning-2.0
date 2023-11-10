let x;

// Array Literal
const numbers = [12, 38, 21, 43, 12, 106];
const mixed = [12, "Hello", true, null];

// Array Constructor

const fruits = new Array("apple", "grape", "orange");

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = "pear";

fruits.length = 2;
// 'apple', 'grape'

fruits.length = 4;
// 'apple', 'grape', 'pear', empty

fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);
