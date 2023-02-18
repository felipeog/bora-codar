import { state } from "../objects/state";

import { checkOperation } from "../utils/checkOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleOperator(value) {
  const isValid = checkOperation(state.currentOperation);

  if (isValid) {
    const result = getResult(state.currentOperation);

    state.lastOperation = { ...state.currentOperation };
    state.currentOperation = {
      left: result,
      operator: null,
      right: null,
    };
  }

  const operators = {
    divide: "/",
    multiply: "*",
    percent: "%",
    subtract: "-",
    sum: "+",
  };
  const operator = operators[value];

  state.currentOperation.operator = operator;

  setScreen();
}
