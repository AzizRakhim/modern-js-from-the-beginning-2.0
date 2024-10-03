// console.log(x); Uncaught ReferenceError: x is not defined. This error is not caught in our code. So as to catch it, we can use try...catch

// try {
//   console.log(x);
// } catch (error) {
//   console.log("Error: " + error); // Now it is no longer an uncaught error. With try...catch, we are catching an error. Hence, here the error won't be visible on error block on dev tools. Instead, it will be on the console block as an info because we are catching it and logging it
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + " is not a number"); // Much like .then.catch, in try...catch, if we call throw new Error, it will fire off the catch
  }
  return number * 2;
}

try {
  const y = double("hello");
  console.log(y);
} catch (error) {
  console.log(error);
}
