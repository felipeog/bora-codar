import { audio } from "../objects/audio";

/**
 * @param {Event} event
 */
export function handleProgressBarInput(event) {
  audio.currentTime = event?.target?.value ?? 0;
}
