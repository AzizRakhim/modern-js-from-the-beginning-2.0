function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData("./movies.json")
//   .then((movies) => {
//     console.log(movies);
//     return getData("./actors.json");
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData("./directors.json");
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// const moviesPromise = getData("./movies1.json"); Triggers catch error
const moviesPromise = getData("./movies.json");

// moviesPromise.then((m) => console.log(m));

const actorsPromise = getData("./actors.json");
const directorsPromise = getData("./directors.json");

const dummyPromise = new Promise((resolve, reject) => {
  resolve("Hello World");
});

Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
