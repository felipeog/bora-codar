import { audio } from "../objects/audio";
import { state } from "../objects/state";

import { getMusicIndex } from "../utils/getMusicIndex";
import { setCurrentMusic } from "../utils/setCurrentMusic";

export async function handleEnded(_event) {
  if (!state.currentMusic) {
    return;
  }

  const index = getMusicIndex("next");
  const music = state.playlist[index];

  await setCurrentMusic(music);

  audio.play();
}
