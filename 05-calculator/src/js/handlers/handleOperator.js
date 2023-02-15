import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleOperator(value) {
  if (!state.currentOperation.left || !!state.currentOperation.right) {
    return;
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
