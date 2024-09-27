// My version
// const button = document.querySelector(".btn");
// const jokeContainer = document.querySelector("#joke");

// const getRandomJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://api.chucknorris.io/jokes/random");

//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 2 || this.readyState === 3) {
//       jokeContainer.innerHTML = "Loading...";
//     } else if (this.readyState === 4 && this.status === 200) {
//       const data = JSON.parse(this.responseText);

//       jokeContainer.innerHTML = data.value;
//     }
//   };
// };

// button.addEventListener("click", getRandomJoke);

// His version
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
  console.log(123);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  // status is 400 because of the wrong URL
  // xhr.open("GET", "https://api.chucknorris.io/jokes/random1");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(JSON.parse(this.responseText).value);
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = "Something Went Wrong (Not Funny)";
      }
    }
  };

  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
