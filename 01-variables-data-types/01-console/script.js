// Causes error on browser
// a;

console.log(100);

console.log("Hello World");

console.log(20, "Hello", true);

const x = 100;

console.log(x);

// clg
console.log();

console.error("Alert");

console.warn("Warning");

console.table({ name: "Aziz", email: "azizrakhim17@gmail.com" });

console.group("simple");
console.error("Alert");
console.warn("Warning");
console.table({ name: "Aziz", email: "azizrakhim17@gmail.com" });
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello World", styles);
