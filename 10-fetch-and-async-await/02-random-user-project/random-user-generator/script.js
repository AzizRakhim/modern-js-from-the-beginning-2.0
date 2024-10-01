// My Version

// const btn = document.querySelector("#generate");
// const userContainer = document.querySelector("#user");
// const spinner = document.querySelector(".spinner");

// const generateUser = () => {
//   spinner.classList.remove("hidden");

//   fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.results[0].gender === "male") {
//         document.body.style.backgroundColor = "blue";
//       } else {
//         document.body.style.backgroundColor = "purple";
//       }

//       userContainer.innerHTML = `<div class="flex justify-between">
//           <div class="flex">
//             <img
//               class="w-48 h-48 rounded-full mr-8"
//               src=${data.results[0].picture.large}
//             />
//             <div class="space-y-3">
//               <p class="text-xl">
//                 <span class="font-bold">Name: </span>${data.results[0].name.first} ${data.results[0].name.last}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Email: </span> ${data.results[0].email}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Phone: </span> ${data.results[0].phone}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Location: </span> ${data.results[0].location.city} ${data.results[0].location.state}
//               </p>
//               <p class="text-xl"><span class="font-bold">Age: </span> ${data.results[0].dob.age}</p>
//             </div>
//           </div>
//         </div>`;
//     })
//     .catch((error) => (userContainer.innerHTML = error))
//     .finally(() => {
//       spinner.classList.add("hidden");
//     });
// };

// btn.addEventListener("click", generateUser);

// His Version

function fetchUser() {
  showSpinner();

  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.results[0]);

      hideSpinner();

      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  console.log(user.gender);

  const userDisplay = document.querySelector("#user");

  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }

  userDisplay.innerHTML = `<div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>`;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

document.querySelector("#generate").addEventListener("click", fetchUser);

fetchUser();
