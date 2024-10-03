const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  console.log(e.target); // e.target is a form itself
  console.log(e.target.firstChild); // e.target.firstChild returns actually the first NODE which a textNode. We know that before getting real element if there is a space, it is considered as a textNode and first is in our case is a space which is a textNode. To get the real element, we gotta use firstElementChild
  console.log(e.target.firstElementChild); // Now, it returns first ELEMENT node which is input tag
  console.log(e.target.firstElementChild.value);

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    console.log(e.target.dataset.id); // we can set a custom attributes to an element like we did with id by setting it as data-id. Custom attributes have a prefix of data so that later on we can call them using dataset key. Here were are calling id which is a custom dataset attribute - data-id

    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  console.log(id, completed);

  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: { "Content-Type": "application/json" },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    console.log("delete");
    const id = e.target.dataset.id;
    console.log(id);
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove()); // Element.remove() method removes the element from the DOM
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo); // Here when init is run on DOMContentLoaded, it is attaching an event to form, hence every time, the form is submitted, that attached even will fire. We don't need init to run every time we submit a form. It runs once and attaches the event to form. That is why, every time, the form is submitted, attached createTodo will fire up
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo); // Double click event
};

init();
