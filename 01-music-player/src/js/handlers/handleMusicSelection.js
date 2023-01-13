import { state } from "../objects/state";

import { setCurrentMusic } from "../utils/setCurrentMusic";

export async function handleMusicSelection(event) {
  const files = event?.target?.files ?? [];

  if (!files?.length) {
    return;
  }

  state.playlist = Array.from(files);

  await setCurrentMusic(state.playlist[0]);
}
