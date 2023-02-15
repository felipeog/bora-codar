import { elements } from "../objects/elements";
import { state } from "../objects/state";

export function setScreen() {
  elements.screen.lastOperation.textContent = formatOperation(
    state.lastOperation
  );
  elements.screen.currentOperation.textContent = formatOperation(
    state.currentOperation
  );
}

function formatOperation(operation) {
  const left = operation.left ?? "";
  const operator = operation.operator ? ` ${operation.operator}` : "";
  const right = operation.right ? ` ${operation.right}` : "";

  return `${left}${operator}${right}`;
}
