let output;

const parent = document.querySelector(".parent");

output = parent.childNodes; // Not a method but a property. This leaves all the nodes inside a parent. The empty white space till the comment is actually a text node, hence, the first HTMLCollection is text. If format is disabled and comment is right next to div with no space, then it would start with comment node
output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

parent.childNodes[3].innerText = "Child One";
parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Hello";

// Parent node

const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement; // The same

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
