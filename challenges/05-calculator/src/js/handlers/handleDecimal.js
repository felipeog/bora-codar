import { state } from "../objects/state";
import { getCurrentSide } from "../utils/getCurrentSide";
import { setScreen } from "../utils/setScreen";

export function handleDecimal() {
  const side = getCurrentSide();

  if (state.currentOperation[side]?.includes(".")) {
    return;
  }

  if (Number(state.currentOperation[side]) === 0) {
    state.currentOperation[side] = "0.";
  } else {
    state.currentOperation[side] += ".";
  }

  setScreen();
}
