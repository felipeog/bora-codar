// TODO: add try/catch on async/await

import { audio } from "./objects/audio";
import { elements } from "./objects/elements";

import { handleChooseMusicClick } from "./handlers/handleChooseMusicClick";
import { handleDurationChange } from "./handlers/handleDurationChange";
import { handleEnded } from "./handlers/handleEnded";
import { handleError } from "./handlers/handleError";
import { handleChooseMusicInput } from "./handlers/handleChooseMusicInput";
import { handleNext } from "./handlers/handleNext";
import { handlePlayPause } from "./handlers/handlePlayPause";
import { handlePrevious } from "./handlers/handlePrevious";
import { handleProgressBarInput } from "./handlers/handleProgressBarInput";
import { handleTimeUpdate } from "./handlers/handleTimeUpdate";

audio.addEventListener("durationchange", handleDurationChange);
audio.addEventListener("ended", handleEnded);
audio.addEventListener("error", handleError);
audio.addEventListener("timeupdate", handleTimeUpdate);

elements.chooseMusicButton.addEventListener("click", handleChooseMusicClick);
elements.chooseMusicInput.addEventListener("input", handleChooseMusicInput);
elements.nextButton.addEventListener("click", handleNext);
elements.playPauseButton.addEventListener("click", handlePlayPause);
elements.previousButton.addEventListener("click", handlePrevious);
elements.progressBar.addEventListener("input", handleProgressBarInput);
