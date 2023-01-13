import { audio } from "../objects/audio";
import { state } from "../objects/state";

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
