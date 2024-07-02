// My version

const list = document.querySelector(".items");
const li = document.createElement("li");

li.innerHTML = `
          Hello World
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

list.appendChild(li);

// His version

// Quick & Dirty
function createElement(item) {
  // const li = `<li>${item}</li>`; This is incorrect 'cause it is not a node, it is merely a simple text. So as to append it, we need to create a node

  const li = document.createElement("li");

  li.innerHTML = `
            ${item}
            <button class="remove-item btn-link text-red">
              <i class="fa-solid fa-xmark"></i>
            </button>`;

  document.querySelector(".items").appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);

  // console.log(li);
  // console.log(li.innerHTML);

  document.querySelector(".items").appendChild(li);
}

createElement("Eggs");
createNewItem("Cheese");
