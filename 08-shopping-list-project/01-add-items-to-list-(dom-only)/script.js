const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === "") {
    alert("Please add an item");

    return;
  }

  // console.log("success"); Validation passed
  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  // console.log(li); li tag created
  const button = createButton("remove-item btn-link text-red");
  // console.log(button); button tag created
  li.appendChild(button);

  // console.log(li); li tag with necessary data inside it is created
  itemList.appendChild(li);
  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
