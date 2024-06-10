// Challenge 1
const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

// My version
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

// His version and mine are the same

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

// My version
const positiveSum = numbers
  .filter((number) => number >= 1)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum);

// His version
const positiveSum2 = numbers
  .filter((number) => number > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum2);

// Challenge 3

const words = ["coder", "programmer", "developer"];

// My version
const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(capitalizedWords);

// His version

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);
