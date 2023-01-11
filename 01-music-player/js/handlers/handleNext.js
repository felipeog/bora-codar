import { state } from "../objects/state.js";

import { setCurrentMusic } from "../utils/setCurrentMusic.js";

export async function handleNext(_event) {
  if (!state.currentMusic) {
    return;
  }

  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex >= state.playlist.length - 1 ? 0 : currentIndex + 1;
  const music = state.playlist[newIndex];

  await setCurrentMusic(music);
}
