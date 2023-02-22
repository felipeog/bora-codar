import { elements } from "../objects/elements";
import { audio } from "../objects/audio";

import { formatSeconds } from "../utils/formatSeconds";

/**
 * @param {Event} event
 */
export function handleTimeUpdate(event) {
  if (isNaN(audio.currentTime) || isNaN(audio.duration)) {
    return;
  }

  const elapsedTime = Math.floor(audio.currentTime);
  const remainingTime = Math.floor(audio.duration) - elapsedTime;

  elements.progressBar.value = audio.currentTime;
  elements.elapsed.textContent = formatSeconds(elapsedTime);
  elements.remaining.textContent = formatSeconds(remainingTime);
}
