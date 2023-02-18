import { state } from "../objects/state";
import { getCurrentSide } from "../utils/getCurrentSide";
import { setScreen } from "../utils/setScreen";

export function handleInverse() {
  const side = getCurrentSide();

  if (Number(state.currentOperation[side]) === 0) {
    return;
  }

  if (state.currentOperation[side]?.startsWith("-")) {
    state.currentOperation[side] = state.currentOperation[side].slice(1);
  } else {
    state.currentOperation[side] = `-${state.currentOperation[side]}`;
  }

  setScreen();
}
