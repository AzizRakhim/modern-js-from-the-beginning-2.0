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

x = person;

console.log(x);
