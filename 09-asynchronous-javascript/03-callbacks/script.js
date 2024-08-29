function toggle(e) {
  console.log("callback ran");
  e.target.classList.toggle("danger");
}

document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
