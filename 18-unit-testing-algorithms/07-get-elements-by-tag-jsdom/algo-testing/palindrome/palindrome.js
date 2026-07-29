// Solution 1
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }

// Solution 2
function palindrome(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - index - 1]);
}

module.exports = palindrome;
