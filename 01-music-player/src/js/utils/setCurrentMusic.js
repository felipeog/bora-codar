import { audio } from "../objects/audio.js";
import { state } from "../objects/state.js";

import { onSuccessRead } from "../utils/onSuccessRead.js";
import { onErrorRead } from "../utils/onErrorRead.js";

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
