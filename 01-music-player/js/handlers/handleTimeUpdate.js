import { elements } from "../objects/elements.js";
import { audio } from "../objects/audio.js";

import { formatSeconds } from "../utils/formatSeconds.js";

export function handleTimeUpdate(_event) {
  if (isNaN(audio.currentTime) || isNaN(audio.duration)) {
    return;
  }

  const elapsedTime = Math.floor(audio.currentTime);
  const remainingTime = Math.floor(audio.duration) - elapsedTime;

  elements.progressBar.value = audio.currentTime;
  elements.elapsed.textContent = formatSeconds(elapsedTime);
  elements.remaining.textContent = formatSeconds(remainingTime);
}
