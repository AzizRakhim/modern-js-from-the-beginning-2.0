// const number = 5;
const number = new Number(5.4527);
// type is object

let x;

x = number.toString();

x = number.toString().length;

x = number.toFixed(2);
// 5.00 changes number to string

x = number.toPrecision(2);

x = number.toExponential(2);

x = number.toLocaleString("en-US");
// converts number to the location's number symbol

x = number.valueOf();
// as new Number(5) is obj. We can extract value 5 from it by this

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
// biggest and smallest numbers can be used in js
