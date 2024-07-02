// querySelectorAll()

// const listItems = document.querySelectorAll("li");
const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(listItems[1]);
console.log(listItems[1].innerText);

// listItems.style.color = red; Error 'cause listItems is a nodeList not an element. style works only on the element

// listItems[1].style.color = "red";

// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     // item.innerText = "Oranges"; This is incorrect 'cause not only li has text but it also has button inside it. This would remove button
//     item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });

const listItems2 = document.getElementsByClassName("item"); // This gets an HTMLCollection, not nodeList. We cannot apply high-order methods to HTMLCollection. However, they can be applied to the nodeList

console.log(listItems2[2]);
console.log(listItems2[2].innerText);

// listItems2.forEach((item) => {
//   console.log(item.innerText);
// });

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName("li"); // This also is an HTMLCollection
console.log(listItems3);
console.log(listItems3[0]);
console.log(listItems3[0].innerText);
