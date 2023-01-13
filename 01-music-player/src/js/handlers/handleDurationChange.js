import { elements } from "../objects/elements";
import { audio } from "../objects/audio";

import { formatSeconds } from "../utils/formatSeconds";

export function handleDurationChange(_event) {
  elements.progressBar.value = 0;
  elements.progressBar.max = audio.duration;
  elements.elapsed.textContent = formatSeconds(0);
  elements.remaining.textContent = formatSeconds(Math.floor(audio.duration));
}
