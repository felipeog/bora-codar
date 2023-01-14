import { audio } from "../objects/audio";
import { state } from "../objects/state";

/**
 * @param {Event} event
 */
export function handlePlayPause(event) {
  if (!state.currentMusic) {
    return;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
