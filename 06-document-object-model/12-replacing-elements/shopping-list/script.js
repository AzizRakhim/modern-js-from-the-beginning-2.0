function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second</li>";
}

// My version
// function replaceAllItems() {
//   const items = document.querySelectorAll("li"); // For some reason, .map won't apply to nodeList, but .forEach will

//   Array.from(items).map((item, index) => {
//     item.outerHTML = `<li>Replaced ${index}</li>`;
//   });
// }

// His version
function replaceAllItems() {
  const lis = document.querySelectorAll("li");

  // lis.forEach((item, index) => {
  //   // item.outerHTML = "<li>Replaced All</li>";
  //   // item.innerHTML = "Replaced All";
  //   if (index === 1) {
  //     item.innerHTML = "Second Item";
  //   } else {
  //     item.innerHTML = "Replaced All";
  //   }
  // });

  // My version
  // lis.forEach((item, index) =>
  //   index === 1
  //     ? (item.innerHTML = "Second Item")
  //     : (item.innerHTML = "Replaced All")
  // );

  // His version
  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? "<li>Second Item</li>" : "<li>Replaced All</li>")
  );
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
