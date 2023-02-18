import { state } from "../objects/state";
import { checkEmptyOperation } from "../utils/checkEmptyOperation";
import { checkValidOperation } from "../utils/checkValidOperation";
import { getResult } from "../utils/getResult";
import { setScreen } from "../utils/setScreen";

export function handleOperator(value) {
  const hasPreviousOperation = checkValidOperation(state.currentOperation);

  if (hasPreviousOperation) {
    const { result, error } = getResult(state.currentOperation);

    if (error) {
      return alert(error);
    }

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

  if (
    operator === "-" &&
    checkEmptyOperation(state.currentOperation) &&
    !hasPreviousOperation
  ) {
    state.currentOperation.left = "-";
  } else {
    state.currentOperation.operator = operator;
  }

  setScreen();
}
