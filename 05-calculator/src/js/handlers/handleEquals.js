import { state } from "../objects/state";

import { checkValidOperation } from "../utils/checkValidOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleEquals() {
  if (!checkValidOperation(state.currentOperation)) {
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
