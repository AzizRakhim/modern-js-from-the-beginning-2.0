let x;

const arr = [33, 54, 14, 68, 23];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(14);

// 0 'cause reverse method is worked before this
x = arr.indexOf(23);

// not presend values return -1
x = arr.indexOf(2323);

// 54, 14, 68, 23 from index 1 till the end
x = arr.slice(1);

//  54, 14, 68 from index 1 till 4 with 4 not included
x = arr.slice(1, 4);

// the first index is the starting point. index 1
// the next parameter is how many to take after that index. from index 1 take 4 elements -> 54, 14, 68, 23
// splices unlike slice changes original array extracting elements from original array so the original array is left with index 0 only [33]
// x = arr.splice(1, 4);

// from index 3 remove 1 element, so 68 is removed. That is one of the ways of removing elements from array
// x = [20]; arr = [33, 54, 14, 23]
// x = arr.splice(3, 1);

// Method chaining. The result is 5. charAt returns the first value of given index
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);
