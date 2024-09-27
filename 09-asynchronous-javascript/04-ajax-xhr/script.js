const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json"); - Gets data from local json file
xhr.open("GET", "https://api.github.com/users/AzizRakhim/repos");

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);

  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    // This manipulates the data which comes from local JSON file and updates the DOM Tree
    // data.forEach((movie) => {
    //   const li = document.createElement("li");
    //   li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
    //   document.querySelector("#results").appendChild(li);
    // });

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
