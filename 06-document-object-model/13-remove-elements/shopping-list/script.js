function removeClearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

// My version
// function removeItem(itemNumber) {
//   const items = document.querySelectorAll("li");

//   items[itemNumber - 1].remove();
// }

// His version
function removeItem(itemNUmber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNUmber})`);

  ul.removeChild(li);
}

function removeItem2(itemNUmber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNUmber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(1);
// removeItem2(2);
// removeItem3(3);
removeItem4(2);
