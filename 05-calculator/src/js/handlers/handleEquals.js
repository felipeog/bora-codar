import { state } from "../objects/state";

import { checkValidOperation } from "../utils/checkValidOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleEquals(event) {
  const isValid = checkValidOperation(state.currentOperation);

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
