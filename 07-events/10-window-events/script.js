// document.querySelector("h1").textContent = "Hello World"; Causes an error 'cause our js script is in head not body. If it is in head, it is read before page loads, hence it does not recognize what document.querySelector() is unless there is defer attribute on the script tag. Defer tells the script to wait for the page load

// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World";
// }; This is the first version of page load. Used before addEventListener

// window.addEventListener(
//   "load",
//   () => (document.querySelector("h1").textContent = "Hello World")
// ); Current way.

window.addEventListener("load", () => console.log("Page Loaded")); // load event waits for everything to load. The whole thing like DOM, images and resources

window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded")); // DOMContentLoaded waits for only the DOM to be loaded. Doesn't care about the images and resource. Hence, it is much faster that load. Because load waits for DOM to be loaded and other resources as well.

console.log("Run me");

// document.querySelector("h1").innerText = "Hello World"; Works because there is defer on the script tag

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
