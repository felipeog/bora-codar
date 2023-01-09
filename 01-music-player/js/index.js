// TODO: break in multiple files?

// elements
const chooseMusicButton = document.querySelector(".choose-music-button");
const elapsed = document.querySelector(".elapsed");
const header = document.querySelector(".header");
const nextButton = document.querySelector(".next-button");
const playPauseButton = document.querySelector(".play-pause-button");
const previousButton = document.querySelector(".previous-button");
const progressBar = document.querySelector(".progress-bar");
const remaining = document.querySelector(".remaining");
const subheader = document.querySelector(".subheader");
const thumbnail = document.querySelector(".thumbnail");

// instances
const audioPlayer = new Audio();

// state
const state = {
  currentMusic: null,
  playlist: [],
};

// events
audioPlayer.addEventListener("durationchange", handleDurationChange);
audioPlayer.addEventListener("ended", handleNext);
audioPlayer.addEventListener("error", handleError);
// TODO: change play/pause button's icon
// audioPlayer.addEventListener("pause", handlePause);
// audioPlayer.addEventListener("play", handlePlay);
audioPlayer.addEventListener("timeupdate", handleTimeUpdate);
chooseMusicButton.addEventListener("click", handleFolderSelection);
nextButton.addEventListener("click", handleNext);
playPauseButton.addEventListener("click", handlePlayPause);
previousButton.addEventListener("click", handlePrevious);
progressBar.addEventListener("input", handleProgressBarInput);

// handlers
async function handleFolderSelection(_event) {
  const dirHandle = await window.showDirectoryPicker();

  if (!dirHandle) {
    return;
  }

  state.playlist = [];

  for await (const value of dirHandle.values()) {
    if (value.kind !== "file") {
      continue;
    }

    const file = await value.getFile();

    if (file.type.startsWith("audio/")) {
      state.playlist.push(file);
    }
  }

  if (!state.playlist.length) {
    return alert("no audio files found");
  }

  state.playlist.sort((a, b) => a.name.localeCompare(b.name));

  await setCurrentMusic(state.playlist[0]);
}

function handlePlayPause(_event) {
  if (!state.currentMusic) {
    return;
  }

  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

async function handlePrevious(_event) {
  if (!state.currentMusic) {
    return;
  }

  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex <= 0 ? state.playlist.length - 1 : currentIndex - 1;
  const music = state.playlist[newIndex];

  await setCurrentMusic(music);
}

async function handleNext(_event) {
  if (!state.currentMusic) {
    return;
  }

  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex >= state.playlist.length - 1 ? 0 : currentIndex + 1;
  const music = state.playlist[newIndex];

  await setCurrentMusic(music);
}

function handleTimeUpdate(_event) {
  const elapsedTime = Math.floor(audioPlayer.currentTime);
  const remainingTime =
    Math.floor(audioPlayer.duration) - Math.floor(audioPlayer.currentTime);

  progressBar.value = audioPlayer.currentTime;
  elapsed.textContent = formatSeconds(elapsedTime);
  remaining.textContent = formatSeconds(remainingTime);
}

function handleDurationChange(_event) {
  progressBar.max = audioPlayer.duration;
}

function handleError(_event) {
  alert("an error occurred");
}

function handleProgressBarInput(event) {
  audioPlayer.currentTime = event.target.value;
}

// utils
async function setCurrentMusic(music) {
  state.currentMusic = music;

  const buffer = await state.currentMusic.arrayBuffer();
  const blob = new Blob([buffer], {
    type: state.currentMusic.type,
  });
  const reader = new jsmediatags.Reader(blob);

  reader.setTagsToRead(["artist", "picture", "title"]).read({
    onSuccess: onSuccessRead,
    onError: onErrorRead,
  });
  audioPlayer.src = window.URL.createObjectURL(blob);
  audioPlayer.play();
}

function onSuccessRead(result) {
  const artist = result?.tags?.artist ?? "Unknown artist";
  const title = result?.tags?.title ?? "Unknown title";
  const pictureData = result?.tags?.picture?.data;
  const base64String = pictureData.reduce((acc, cur) => {
    return `${acc}${String.fromCharCode(cur)}`;
  }, "");

  thumbnail.src =
    "data:" + pictureData.format + ";base64," + window.btoa(base64String);
  header.textContent = title;
  header.title = title;
  subheader.textContent = artist;
  subheader.title = artist;
}

function onErrorRead(error) {
  console.error(error);

  thumbnail.src = "img/default-thumbnail.png";
  header.textContent = "Unknown title";
  header.title = "Unknown title";
  subheader.textContent = "Unknown artist";
  subheader.title = "Unknown artist";
}

function formatSeconds(initialSeconds) {
  if (isNaN(initialSeconds)) {
    return "00:00";
  }

  const minutes = String(Math.floor(initialSeconds / 60)).padStart(2, "0");
  const seconds = String(Math.floor(initialSeconds % 60)).padStart(2, "0");

  return `${minutes}:${seconds}`;
}
