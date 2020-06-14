const video = document.getElementById("video");
const play = document.getElementById("play");
const stopvid = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopvid.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

//play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play and pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//update progress on range
function updateProgress() {
  return true;
}

// set timestamp on progress
function setVideoProgress() {
  return true;
}

//stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
