// console.log(window.location.pathname); /11-flixx-app-project/flixx-app-theme/index.html. It shows path after base url

const global = {
  currentPage: window.location.pathname,
};

// console.log(global.currentPage);

// Display 20 most popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  // console.log(results);

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
            ? `
                <img
                  src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top"
                  alt="${movie.title}"
                />
              `
            : `
                <img
                  src="images/no-image.jpg"
                  class="card-img-top"
                  alt="${movie.title}"
                />
              `
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
    `;

    document.querySelector("#popular-movies").appendChild(div);
  });
}

// Display 20 most popular tv shows
async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");

  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <a href="tv-details.html?id=${show.id}">
        ${
          show.poster_path
            ? `
                <img
                  src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                  class="card-img-top"
                  alt="${show.name}"
                />
              `
            : `
                <img
                  src="images/no-image.jpg"
                  class="card-img-top"
                  alt="${show.name}"
                />
              `
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text">
          <small class="text-muted">Air Date: ${show.first_air_date}</small>
        </p>
      </div>
    `;

    document.querySelector("#popular-shows").appendChild(div);
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  // Register your key at https://www.themoviedb.org/settings/api and enter here
  // Only use this for development or very small projects. You should store your key and make requests from a server
  const API_KEY = "ed3ff45c15f5aee076628ad7752570c4";
  const API_URL = "https://api.themoviedb.org/3/";

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

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
      // console.log("Home");
      displayPopularMovies();
      break;
    case "/11-flixx-app-project/flixx-app-theme/shows.html":
      // My version
      // highlightActiveLink(1);
      // console.log("Shows");
      displayPopularShows();
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
