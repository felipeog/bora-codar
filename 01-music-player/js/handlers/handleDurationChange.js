import { elements } from "../objects/elements.js";
import { audio } from "../objects/audio.js";

export function handleDurationChange(_event) {
  elements.progressBar.max = audio.duration;
}
