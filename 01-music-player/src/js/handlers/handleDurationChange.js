import { elements } from "../objects/elements.js";
import { audio } from "../objects/audio.js";

import { formatSeconds } from "../utils/formatSeconds.js";

export function handleDurationChange(_event) {
  elements.progressBar.value = 0;
  elements.progressBar.max = audio.duration;
  elements.elapsed.textContent = formatSeconds(0);
  elements.remaining.textContent = formatSeconds(Math.floor(audio.duration));
}
