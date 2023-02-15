import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleInverse() {
  const side = state.currentOperation.operator ? "right" : "left";

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
