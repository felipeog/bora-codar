import { audio } from "../objects/audio.js";

export function handleProgressBarInput(event) {
  audio.currentTime = event?.target?.value ?? 0;
}