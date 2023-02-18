import { elements } from "../objects/elements";
import { state } from "../objects/state";

export function setScreen() {
  elements.screen.lastOperation.textContent = formatOperation(
    state.lastOperation
  );
  elements.screen.currentOperation.textContent = formatOperation(
    state.currentOperation
  );

  scrollToTheRight();
}

function formatOperation(operation) {
  const operators = {
    "/": "÷",
    "*": "×",
    "%": "%",
    "-": "−",
    "+": "+",
  };
  const left = operation.left ?? "";
  const operator = operation.operator
    ? ` ${operators[operation.operator]}`
    : "";
  const right = operation.right ? ` ${operation.right}` : "";

  return `${left}${operator}${right}`;
}

function scrollToTheRight() {
  elements.screen.lastOperation.scrollLeft =
    elements.screen.lastOperation.scrollWidth;
  elements.screen.currentOperation.scrollLeft =
    elements.screen.currentOperation.scrollWidth;
}
