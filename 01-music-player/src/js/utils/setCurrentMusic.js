import { audio } from "../objects/audio";
import { state } from "../objects/state";

import { onSuccessRead } from "../utils/onSuccessRead";
import { onErrorRead } from "../utils/onErrorRead";

/**
 * @param {File} music
 */
export async function setCurrentMusic(music) {
  state.currentMusic = music;

  const buffer = await state.currentMusic.arrayBuffer();
  const blob = new Blob([buffer], {
    type: state.currentMusic.type,
  });

  jsmediatags.read(blob, {
    onSuccess: onSuccessRead,
    onError: onErrorRead,
  });

  audio.src = window.URL.createObjectURL(blob);
}
