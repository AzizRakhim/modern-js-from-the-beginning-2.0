let x;

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.state;
x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

delete person.age;
person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const person2 = {
  "first name": "Aziz",
  "last name": "Rakhim",
};

x = person2["first name"];

console.log(x);
