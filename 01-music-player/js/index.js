import { audio } from "./objects/audio.js";
import { elements } from "./objects/elements.js";

import { handleDurationChange } from "./handlers/handleDurationChange.js";
import { handleError } from "./handlers/handleError.js";
import { handleFolderSelection } from "./handlers/handleFolderSelection.js";
import { handleNext } from "./handlers/handleNext.js";
import { handlePlayPause } from "./handlers/handlePlayPause.js";
import { handlePrevious } from "./handlers/handlePrevious.js";
import { handleProgressBarInput } from "./handlers/handleProgressBarInput.js";
import { handleTimeUpdate } from "./handlers/handleTimeUpdate.js";

audio.addEventListener("durationchange", handleDurationChange);
audio.addEventListener("ended", handleNext);
audio.addEventListener("error", handleError);
audio.addEventListener("timeupdate", handleTimeUpdate);

elements.chooseMusicButton.addEventListener("click", handleFolderSelection);
elements.nextButton.addEventListener("click", handleNext);
elements.playPauseButton.addEventListener("click", handlePlayPause);
elements.previousButton.addEventListener("click", handlePrevious);
elements.progressBar.addEventListener("input", handleProgressBarInput);
