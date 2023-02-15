import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleEquals(event) {
  const isValid = Object.values(state.currentOperation).every(
    (item) => item !== null
  );

  if (!isValid) {
    return;
  }

  const result = getResult();

  state.lastOperation = { ...state.currentOperation };
  state.currentOperation = {
    left: result,
    operator: null,
    right: null,
  };

  setScreen();
}

function getResult() {
  if (state.currentOperation.operator === "%") {
    return eval(
      `${state.currentOperation.left / 100} * ${state.currentOperation.right}`
    );
  }

  return eval(
    `${state.currentOperation.left} ${state.currentOperation.operator} ${state.currentOperation.right}`
  );
}
