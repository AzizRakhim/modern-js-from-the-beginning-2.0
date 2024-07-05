const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  // console.log("Input");
  // console.log(e.target.value);
  // console.log(e.key); event input is not like keydown, keypress, keyup. So u won't be able to get key, keyCode and code. input event is like onChange

  heading.textContent = e.target.value;
}

function onChecked(e) {
  // console.log(e.target.checked);
  const isChecked = e.target.checked;

  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

function onFocus(e) {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "red";
}

function onBlur(e) {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}

// itemInput.addEventListener("keydown", onInput);
// itemInput.addEventListener("input", onInput);
// priorityInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput); // For select, u can also use change event alongside with input event
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
