<<<<<<< HEAD
let x;

const name = "John";
const age = 31;

x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// const s = "Hello World";

// string is not type of object yet it has length properties. That is because, JS created a temporary wrapper for string that enables it to have properties
const s = new String("Hello World");

x = typeof s;
x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

// H. Equal to s[0];
x = s.charAt(0);

// 0. If more than one, the first index is returned
x = s.indexOf("H");

// llo. From 2 to 5. Not including 5
x = s.substring(2, 5);

// orld. Started 7 till the end
x = s.substring(7);

// Hello. not including 5
x = s.slice(0, 5);

// The difference between substring. It allows negative
x = s.slice(-11, -6);

x = "          Hello World";

x = x.trim();

x = s.replace("World", "John");

x = s.includes("Hell");

x = s.valueOf();

// Converts string to array -> ['Hello World']
x = s.split();

x = s.split(" ");

// Splits each character -> ['H', 'e', 'l', ...etc]
x = s.split("");

console.log(x);
=======
let x;

const name = "John";
const age = 31;

x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// const s = "Hello World";

// string is not type of object yet it has length properties. That is because, JS created a temporary wrapper for string that enables it to have properties
const s = new String("Hello World");

x = typeof s;
x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

// H. Equal to s[0];
x = s.charAt(0);

// 0. If more than one, the first index is returned
x = s.indexOf("H");

// llo. From 2 to 5. Not including 5
x = s.substring(2, 5);

// orld. Started 7 till the end
x = s.substring(7);

// Hello. not including 5
x = s.slice(0, 5);

// The difference between substring. It allows negative
x = s.slice(-11, -6);

x = "          Hello World";

x = x.trim();

x = s.replace("World", "John");

x = s.includes("Hell");

x = s.valueOf();

// Converts string to array -> ['Hello World']
x = s.split();

x = s.split(" ");

// Splits each character -> ['H', 'e', 'l', ...etc]
x = s.split("");

console.log(x);
>>>>>>> test
