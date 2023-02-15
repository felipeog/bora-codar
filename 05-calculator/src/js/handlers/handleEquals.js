import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleEquals(event) {
  const isValid = Object.values(state.currentOperation).every(
    (item) => item !== null
  );

  if (!isValid) {
    return;
  }

  const result = eval(
    `${state.currentOperation.left}${state.currentOperation.operator}${state.currentOperation.right}`
  );

  state.lastOperation = { ...state.currentOperation };
  state.currentOperation = {
    left: result,
    operator: null,
    right: null,
  };

  setScreen();
}
