import { audio } from "../objects/audio";

export function handleProgressBarInput(event) {
  audio.currentTime = event?.target?.value ?? 0;
}
