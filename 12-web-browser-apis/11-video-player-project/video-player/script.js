// My Version

// const video = document.getElementById("video");
// const play = document.getElementById("play");
// const stopBtn = document.getElementById("stop");
// const progress = document.getElementById("progress");
// const timestamp = document.getElementById("timestamp");

// const playVideo = () => {
//   if (
//     !!(
//       video.currentTime > 0 &&
//       !video.paused &&
//       !video.ended &&
//       video.readyState > 2
//     )
//   ) {
//     video.pause();
//     play.querySelector("i.fa").classList.remove("fa-pause");
//     play.querySelector("i.fa").classList.add("fa-play");
//   } else {
//     video.play();
//     play.querySelector("i.fa").classList.remove("fa-play");
//     play.querySelector("i.fa").classList.add("fa-pause");
//   }
// };

// const stopVideo = () => {
//   video.pause();
//   video.currentTime = 0;
//   play.querySelector("i.fa").classList.remove("fa-pause");
//   play.querySelector("i.fa").classList.add("fa-play");
// };

// const updateProgress = () => {
//   const progressTime = (progress.value / 100) * video.duration;
//   video.currentTime = progressTime;
// };

// const formatTime = (time) => {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;
// };

// const progressBar = (e) => {
//   const { duration, currentTime } = e.srcElement;
//   const progressPercent = (currentTime / duration) * 100;

//   progress.value = progressPercent;

//   timestamp.textContent = `${formatTime(currentTime)}`;

//   if (progressPercent === 100) {
//     play.querySelector("i.fa").classList.remove("fa-pause");
//     play.querySelector("i.fa").classList.add("fa-play");
//   }
// };

// play.addEventListener("click", playVideo);
// stopBtn.addEventListener("click", stopVideo);
// progress.addEventListener("input", updateProgress);
// video.addEventListener("timeupdate", progressBar);

// His Version

const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></>';
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener("click", playPause);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", playPause);
stop.addEventListener("click", stopVideo);
progress.addEventListener("click", setProgress);
