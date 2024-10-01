// window.fetch(); Fetch is built-in function in window object. So we have an access to it always. We can simply call fetch without window 'cause window is a global obj

// fetch("./movies1.json").then((response) => {
//   console.log(response);
// }); Fetch returns a Response object. When something goes wrong, the Response object's status will be 404 or other error status. Plus, ok or other keys will be false

fetch("./movies.json")
  .then((response) => {
    // console.log(response); This is the Response object. fetch returns a Response obj and to get data from it, it has .json method. We need to run it to get data. Actually, we need to return response.json() which is a promise and in the second then we get data

    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// axios.get().then(data) With axios, it is different. Then first then returns data. axios is not default build-in in the browser. It is an external library

// Short way. Without curly braces and return keys
// Fetching a JSON file
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

//  Fetching a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch("https://api.github.com/users/AzizRakhim")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
