import { state } from "../objects/state";

import { setScreen } from "../utils/setScreen";

export function handleNumber(value) {
  const side = state.currentOperation.operator ? "right" : "left";

  if (state.currentOperation[side]?.includes(".")) {
    const decimal = state.currentOperation[side].split(".")[1];

    if (decimal?.length >= 3) {
      return;
    }
  }

  const newValue = concatNumber(value, state.currentOperation[side]);

  if (
    Number(newValue) >= -999_999_999.999 &&
    Number(newValue) <= 999_999_999.999
  ) {
    state.currentOperation[side] = newValue;
  }

  setScreen();
}

function concatNumber(value, state) {
  const numbers = {
    number0: "0",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    number6: "6",
    number7: "7",
    number8: "8",
    number9: "9",
  };
  const number = numbers[value];

  if (state?.endsWith(".") || Number(state) !== 0) {
    return `${state}${number}`;
  }

  return number;
}
