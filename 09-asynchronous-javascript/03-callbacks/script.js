function toggle(e) {
  console.log("callback ran");
  e.target.classList.toggle("danger");
}

document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// getPosts();

// First calling creatingPost which takes 2 seconds and then getPosts which takes 1 second, till the new post is added, getPosts will run and show only two posts without showing the new added one that takes 2 seconds. To fix that we use callback, where createPost runs getPosts callback function after the new one is created
