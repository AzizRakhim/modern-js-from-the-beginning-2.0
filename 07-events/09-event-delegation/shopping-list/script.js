const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.remove();
//   });
// });

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
