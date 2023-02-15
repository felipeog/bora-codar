import { setKeyboard } from "./utils/setKeyboard";
import { setScreen } from "./utils/setScreen";

window.addEventListener("load", () => {
  setScreen();
  setKeyboard();
});
