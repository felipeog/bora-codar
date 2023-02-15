import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleDecimal() {
  const side = state.currentOperation.operator ? "right" : "left";

  if (state.currentOperation[side]?.includes(".")) {
    return;
  }

  if (Number(state.currentOperation[side]) === 0) {
    state.currentOperation[side] = "0.";
  }

  state.currentOperation[side] += ".";

  setScreen();
}
