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
  let result;

  if (state.currentOperation.operator === "%") {
    result = eval(
      `${state.currentOperation.left / 100} * ${state.currentOperation.right}`
    );
  }

  result = eval(
    `${state.currentOperation.left} ${state.currentOperation.operator} ${state.currentOperation.right}`
  );

  // https://stackoverflow.com/a/3613112/10942224
  return Number(result.toFixed(4)).toString();
}
