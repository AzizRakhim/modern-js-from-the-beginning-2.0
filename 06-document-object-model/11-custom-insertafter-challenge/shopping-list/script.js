// My version

// const li = document.createElement("li");
// li.textContent = "Insert Me After!";

// const firstItem = document.querySelector("li:first-child");

// function insertAfter(newEl, existingEl) {
//   const elementAfterExistingEl = existingEl.nextElementSibling;

//   const list = document.querySelector("ul");

//   list.insertBefore(newEl, elementAfterExistingEl);
// }

// insertAfter(li, firstItem);

// His version

function insertAfter(newEl, exitingEl) {
  exitingEl.parentElement.insertBefore(newEl, exitingEl.nextSibling);
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
