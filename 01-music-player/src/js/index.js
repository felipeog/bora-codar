// TODO: add try/catch on async/await

import { audio } from "./objects/audio";
import { elements } from "./objects/elements";

import { handleDurationChange } from "./handlers/handleDurationChange";
import { handleError } from "./handlers/handleError";
import { handleMusicSelection } from "./handlers/handleMusicSelection";
import { handleNext } from "./handlers/handleNext";
import { handlePlayPause } from "./handlers/handlePlayPause";
import { handlePrevious } from "./handlers/handlePrevious";
import { handleProgressBarInput } from "./handlers/handleProgressBarInput";
import { handleTimeUpdate } from "./handlers/handleTimeUpdate";

audio.addEventListener("durationchange", handleDurationChange);
audio.addEventListener("ended", handleNext);
audio.addEventListener("error", handleError);
audio.addEventListener("timeupdate", handleTimeUpdate);

elements.chooseMusicInput.addEventListener("input", handleMusicSelection);
elements.nextButton.addEventListener("click", handleNext);
elements.playPauseButton.addEventListener("click", handlePlayPause);
elements.previousButton.addEventListener("click", handlePrevious);
elements.progressBar.addEventListener("input", handleProgressBarInput);
