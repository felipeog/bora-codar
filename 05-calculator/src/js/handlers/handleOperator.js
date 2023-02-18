import { state } from "../objects/state";

import { checkEmptyOperation } from "../utils/checkEmptyOperation";
import { checkValidOperation } from "../utils/checkValidOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleOperator(value) {
  if (checkValidOperation(state.currentOperation)) {
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

  if (operator === "-" && checkEmptyOperation(state.currentOperation)) {
    state.currentOperation.left = "-";
  } else {
    state.currentOperation.operator = operator;
  }

  setScreen();
}
