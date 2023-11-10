let x;

x = Math.sqrt(9);

x = Math.abs(-5);
// 5. returns absolute ie positive value

x = Math.round(4.2);
// 4. rounds to the smallest or the biggest value. 4.5 is also 5

x = Math.ceil(4.2);

x = Math.floor(4.9);

x = Math.pow(2, 3);
// 2 * 2 * 2

x = Math.min(4, 5, 3);

x = Math.max(4, 5, 3);

x = Math.random();
// 0.5252506747532897. Gives random value from 0 to 1

x = Math.random() * 10;
// 3.1093420578109687. Gives random value from 0 to 9. It counts 10 from index 0

x = Math.random() * 10 + 1;
// 9.885387642167782. Gives random value from 1 to 10. It counts 10 from index 0

x = Math.floor(Math.random() * 100 + 1);
// 37. rounding it down

console.log(x);
