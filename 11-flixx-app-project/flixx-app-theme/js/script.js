// console.log(window.location.pathname); /11-flixx-app-project/flixx-app-theme/index.html. It shows path after base url

const global = {
  currentPage: window.location.pathname,
};

// console.log(global.currentPage);

// Highlight active link
function highlightActiveLink() {
  // My version
  // const navLinks = document.querySelectorAll(".nav-link");

  // navLinks[index].classList.toggle("active");

  // His version
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// Init App
function init() {
  switch (global.currentPage) {
    case "/11-flixx-app-project/flixx-app-theme/":
    case "/11-flixx-app-project/flixx-app-theme/index.html":
      // My version
      // highlightActiveLink(0);
      console.log("Home");
      break;
    case "/11-flixx-app-project/flixx-app-theme/shows.html":
      // My version
      // highlightActiveLink(1);
      console.log("Shows");
      break;
    case "/11-flixx-app-project/flixx-app-theme/movie-details.html":
      console.log("Movie Details");
      break;
    case "/11-flixx-app-project/flixx-app-theme/tv-details.html":
      console.log("TV Details");
      break;
    case "/11-flixx-app-project/flixx-app-theme/search.html":
      console.log("Search");
      break;
    default:
      break;
  }

  // His version
  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
