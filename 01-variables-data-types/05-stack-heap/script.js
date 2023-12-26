// These values are stored on the stack

const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
  name: "Aziz",
  age: 21,
};

let newName = name;
newName = "Johnathan";

let newPerson = person;
newPerson.name = "Azizbek";

console.log(name, newName);
console.log(person, newPerson);
