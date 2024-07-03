const clearBtn = document.querySelector("#clear");

// My version
// const items = document.querySelectorAll(".items li");

function onClear() {
  // items.forEach((item) => {
  //   item.remove();
  // });

  // His versions
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  // itemList.innerHTML = "";

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Javascript Event Listener
// Assigning it as a attr causes the last one to override others. So basically in this example, onclick only triggers console.log()
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// clearBtn.onclick = function () {
//   console.log("Clear Items");
// };

// addEventListener()
// With addEventListener, we can call as many events as possible onto one element
// clearBtn.addEventListener("click", () => alert("Clear Items"));

clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
