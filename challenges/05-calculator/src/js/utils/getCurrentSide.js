import { state } from "../objects/state";

export function getCurrentSide() {
  return state.currentOperation.operator ? "right" : "left";
}
