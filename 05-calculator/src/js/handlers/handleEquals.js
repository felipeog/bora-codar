import { state } from "../objects/state";

import { checkOperation } from "../utils/checkOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleEquals(event) {
  const isValid = checkOperation(state.currentOperation);

  if (!isValid) {
    return;
  }

  const result = getResult(state.currentOperation);

  state.lastOperation = { ...state.currentOperation };
  state.currentOperation = {
    left: result,
    operator: null,
    right: null,
  };

  setScreen();
}
