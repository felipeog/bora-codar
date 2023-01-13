import { audio } from "../objects/audio.js";
import { state } from "../objects/state.js";

import { setCurrentMusic } from "../utils/setCurrentMusic.js";

export async function handlePrevious(_event) {
  if (!state.currentMusic) {
    return;
  }

  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex <= 0 ? state.playlist.length - 1 : currentIndex - 1;
  const music = state.playlist[newIndex];
  const isCurrentPlaying = !audio.paused;

  await setCurrentMusic(music);

  if (isCurrentPlaying) {
    audio.play();
  }
}
