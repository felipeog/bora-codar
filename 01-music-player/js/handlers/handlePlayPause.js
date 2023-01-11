import { audio } from "../objects/audio.js";
import { state } from "../objects/state.js";

export function handlePlayPause(_event) {
  if (!state.currentMusic) {
    return;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
