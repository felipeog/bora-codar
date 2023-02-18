import { defaultState } from "../consts/defaultState";
import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleClear(value) {
  switch (value) {
    case "clearAll":
      clearAll();
      setScreen();
      break;

    case "clearLastInput":
      clearLastInput();
      setScreen();
      break;

    default:
      console.error("Unhandled case @ handleClear");
  }
}

function clearAll() {
  state.currentOperation = { ...defaultState };
  state.lastOperation = { ...defaultState };
}

function clearLastInput() {
  if (state.currentOperation.right !== null) {
    state.currentOperation.right = null;
    return;
  }

  if (state.currentOperation.operator !== null) {
    state.currentOperation.operator = null;
    return;
  }

  if (state.currentOperation.left !== null) {
    state.currentOperation.left = "0";
    return;
  }
}
