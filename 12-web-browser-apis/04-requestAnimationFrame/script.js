const image = document.querySelector("img");
let start;
let done = false;

function step(timestamp) {
  // console.log(timestamp) In milliseconds, when the animation started
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start; // the duration the animation started

  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 10}px) rotate(${
    elapsed / 10
  }deg)`;

  requestAnimationFrame(step); // call requestAnimationFrame recursively to repaint the browser
}

requestAnimationFrame(step);
