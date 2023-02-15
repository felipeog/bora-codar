import { state } from "../objects/state";
import { setScreen } from "../utils/setScreen";

export function handleClear({ type }) {
  switch (type) {
    case "all":
      state.currentOperation = {
        left: "0",
        operator: null,
        right: null,
      };
      state.lastOperation = {
        left: null,
        operator: null,
        right: null,
      };

      setScreen();
      break;

    case "last":
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
