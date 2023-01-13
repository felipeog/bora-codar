import { audio } from "../objects/audio";
import { state } from "../objects/state";

import { setCurrentMusic } from "../utils/setCurrentMusic";

export async function handleNext(_event) {
  if (!state.currentMusic) {
    return;
  }

  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const newIndex =
    currentIndex >= state.playlist.length - 1 ? 0 : currentIndex + 1;
  const music = state.playlist[newIndex];
  const isCurrentPlaying = !audio.paused;

  await setCurrentMusic(music);

  if (isCurrentPlaying) {
    audio.play();
  }
}
