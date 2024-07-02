const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// div.innerText = "Hello World"; innerText is mostly for getting text or updating already present text. For creating a new text, use textNode

const text = document.createTextNode("Hello World");

div.appendChild(text);

// console.log(div);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);
