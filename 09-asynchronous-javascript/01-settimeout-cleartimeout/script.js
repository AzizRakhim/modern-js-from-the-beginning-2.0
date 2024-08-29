// setTimeout(function () {
//   console.log("Hello from callback");
// }, 2000);

// Here, first global scope renders and then callback renders. However, even though we change setTimeout to 0, still global scope first renders. The reason for that. The callback is first put onto the task queue and waits it to be cleared before starting execution

// console.log("Hello from global scope");

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}

// setTimeout(changeText, 2000);

const timerId = setTimeout(changeText, 3000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timer Cancelled");
});
