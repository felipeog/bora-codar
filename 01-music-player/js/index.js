// const actions = document.querySelector('.actions')
// const container = document.querySelector('.container')
// const duration = document.querySelector('.duration')
// const header = document.querySelector('.header')
// const subheader = document.querySelector('.subheader')
// const thumbnail = document.querySelector('.thumbnail')
// const wrapper = document.querySelector('.wrapper')

// elements
const chooseMusicButton = document.querySelector(".choose-music-button");

const playPauseButton = document.querySelector(".play-pause-button");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const progressBar = document.querySelector(".progress-bar");
const elapsed = document.querySelector(".elapsed");
const remaining = document.querySelector(".remaining");

const audioPlayer = new Audio();

// state
const state = {
  playlist: [],
  currentMusic: null,
};

// events
chooseMusicButton.addEventListener("click", handleFolderSelection);
playPauseButton.addEventListener("click", handlePlayPause);
previousButton.addEventListener("click", handlePrevious);
nextButton.addEventListener("click", handleNext);

// TODO: check events: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#events
audioPlayer.addEventListener("timeupdate", (event) => {
  console.log("🚀 ~ event", event);
});

// utils
async function handleFolderSelection(_event) {
  const dirHandle = await window.showDirectoryPicker();

  if (!dirHandle) {
    return;
  }

  state.playlist = [];

  for await (const value of dirHandle.values()) {
    const file = await value.getFile();

    console.log({ file });

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
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function handlePrevious(_event) {
  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex <= 0 ? state.playlist.length - 1 : currentIndex - 1;
  const music = state.playlist[newIndex];

  setCurrentMusic(music);
}

function handleNext(_event) {
  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex > state.playlist.length - 1 ? 0 : currentIndex + 1;
  const music = state.playlist[newIndex];

  setCurrentMusic(music);
}

async function setCurrentMusic(music) {
  state.currentMusic = music;

  const buffer = await state.currentMusic.arrayBuffer();
  const blob = new Blob([buffer], {
    type: state.currentMusic.type,
  });

  audioPlayer.src = window.URL.createObjectURL(blob);
  audioPlayer.play();
}
