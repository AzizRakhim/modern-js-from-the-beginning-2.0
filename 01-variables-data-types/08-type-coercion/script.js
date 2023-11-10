let x;

// 55 string
x = 5 + "5";

x = 5 + Number("5");

// 25
x = 5 * "5";

// 5, null = 0
x = 5 + null;

// 0
x = Number(null);

x = Number(true);
x = Number(false);

// 6
x = 5 + true;

x = 5 + false;

// NaN
x = 5 + undefined;

console.log(x, typeof x);
