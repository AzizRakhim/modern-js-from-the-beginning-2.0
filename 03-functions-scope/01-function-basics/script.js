function sayHello() {
  console.log("Hello World");
}

sayHello();

// parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// arguments
add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;

  console.log("After the return"); // Nothing works after return
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
