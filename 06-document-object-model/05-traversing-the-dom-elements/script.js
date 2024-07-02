let output;

// Get child elements

const parent = document.querySelector(".parent"); // Gets an HTMLCollection of children

// output = parent.children() Error 'cause children is an attribute or property not a method.

output = parent.children;

output = parent.children[1];

// console.dir(output); Shows all the methods and properties of an element

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

// parent.firstElementChild() This is a property not function

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Get parent elements from a child

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
