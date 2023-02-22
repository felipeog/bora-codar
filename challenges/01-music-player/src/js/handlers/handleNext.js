import { audio } from "../objects/audio";
import { state } from "../objects/state";

import { getMusicIndex } from "../utils/getMusicIndex";
import { setCurrentMusic } from "../utils/setCurrentMusic";

/**
 * @param {Event} event
 */
export async function handleNext(event) {
  if (!state.currentMusic) {
    return;
  }

  const index = getMusicIndex("next");
  const music = state.playlist[index];
  const isCurrentPlaying = !audio.paused;

  await setCurrentMusic(music);

  if (isCurrentPlaying) {
    audio.play();
  }
}
