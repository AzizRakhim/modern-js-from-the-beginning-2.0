// Challenge 1 - my version

// const getCelsius = (degree) => ((degree - 32) * 5) / 9;

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 1 - his version
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(32)} \xB0C`);

// Challenge 2 - my version

// const minMax = (array) => {
//   const obj = { min: Math.min(...array), max: Math.max(...array) };
//   return obj;
// };

// console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 2 - his version

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3 - my version

// ((length, width) => {
//   console.log(
//     `The area of a rectangle with a length of ${length} and a width of ${width} is ${
//       length * width
//     }`
//   );
// })(10, 5);

// Challenge 3 - his version

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
