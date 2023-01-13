import { state } from "../objects/state.js";

import { setCurrentMusic } from "../utils/setCurrentMusic.js";

export async function handleMusicSelection(event) {
  const files = event?.target?.files ?? [];

  if (!files?.length) {
    return;
  }

  state.playlist = [...files];

  await setCurrentMusic(state.playlist[0]);
}
