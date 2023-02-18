import { applyInput } from "../utils/applyInput";

export function handleButtonPress(event) {
  const input = event.key;
  const buttons = {
    0: "number0",
    1: "number1",
    2: "number2",
    3: "number3",
    4: "number4",
    5: "number5",
    6: "number6",
    7: "number7",
    8: "number8",
    9: "number9",
    "/": "divide",
    "*": "multiply",
    "%": "percent",
    "-": "subtract",
    "+": "sum",
    c: "clearAll",
    e: "clearLastInput",
    Backspace: "clearLastInput",
    ".": "decimal",
    i: "inverse",
    Enter: "equals",
    "=": "equals",
    " ": "equals",
  };
  const value = buttons?.[input] ?? "";

  applyInput(value);
}
