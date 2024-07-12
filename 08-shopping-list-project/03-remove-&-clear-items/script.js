const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === "") {
    alert("Please add an item");

    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

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

function removeItem(e) {
  // console.log(e.target); We are using something called Event Delegation. We assigned click event onto the parent ul. Not each button. Now, e.target is what element is clicked. It can be ul, li, i etc
  // console.log(e.target.parentElement); Clicking icon with e.target gets i tag. To get button tag, use parentElement
  // console.log(e.target.parentElement.classList);
  // e.target.remove(); As we are using Event Delegation, we can't simply e.target.remove 'cause e.target can be everything. It can also be ul itself, hence removing whole list

  if (e.target.parentElement.classList.contains("remove-item")) {
    // console.log("click");
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  // console.log("works");
  // itemList.innerHTML = ""; Simple and faster way

  // Second, more efficient way
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
