const arr_one = [1, 2, 3, 4, 5];

arr_one.reverse().unshift(6);
arr_one.push(0);

console.log(arr_one);

const arr_two = [1, 2, 3, 4, 5];
const arr_three = [5, 6, 7, 8, 9, 10];

const result = arr_two.concat(arr_three.slice(1));

console.log(result);

// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

arr.push(6);
arr.unshift(0);
arr.reverse();

// arr.push(6).unshift(0);
// Throws an error 'cause push and unshift methods return number. 6.unshift error.

// let x = arr.push(6);
// 6

// Result: [6, 5, 4, 3, 2, 1, 0];

// console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr3);
