import { state } from "../objects/state";

import { setCurrentMusic } from "../utils/setCurrentMusic";

/**
 * @param {Event} event
 */
export async function handleChooseMusicInput(event) {
  /**
   * @type {File[]}
   */
  const files = event?.target?.files ?? [];

  if (!files?.length) {
    return;
  }

  state.playlist = Array.from(files);

  await setCurrentMusic(state.playlist[0]);
}
