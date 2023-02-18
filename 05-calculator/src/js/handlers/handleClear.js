import { state } from "../objects/state";

import { setScreen } from "../utils/setScreen";

export function handleClear(value) {
  switch (value) {
    case "clearAll":
      state.currentOperation = {
        left: "0",
        operator: null,
        right: null,
      };
      state.lastOperation = {
        left: "0",
        operator: null,
        right: null,
      };

      setScreen();
      break;

    case "clearLastInput":
      if (state.currentOperation.right !== null) {
        state.currentOperation.right = null;
      } else if (state.currentOperation.operator !== null) {
        state.currentOperation.operator = null;
      } else if (state.currentOperation.left !== null) {
        state.currentOperation.left = "0";
      }

      setScreen();
      break;

    default:
      console.error("Unhandled case @ handleClear");
  }
}
