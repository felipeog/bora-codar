import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleOperator(value) {
  if (
    Number(state.currentOperation.left) === 0 ||
    Number(state.currentOperation.right) > 0
  ) {
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
