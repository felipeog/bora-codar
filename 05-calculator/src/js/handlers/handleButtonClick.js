import { handleClear } from "./handleClear";
import { handleDecimal } from "./handleDecimal";
import { handleEquals } from "./handleEquals";
import { handleInverse } from "./handleInverse";
import { handleNumber } from "./handleNumber";
import { handleOperator } from "./handleOperator";

export function handleButtonClick(event) {
  const value = event?.target?.dataset?.value ?? "";

  switch (value) {
    case "number0":
    case "number1":
    case "number2":
    case "number3":
    case "number4":
    case "number5":
    case "number6":
    case "number7":
    case "number8":
    case "number9":
      handleNumber(value);
      break;

    case "divide":
    case "multiply":
    case "percent":
    case "subtract":
    case "sum":
      handleOperator(value);
      break;

    case "clearAll":
    case "clearLastInput":
      handleClear(value);
      break;

    case "decimal":
      handleDecimal();
      break;

    case "inverse":
      handleInverse();
      break;

    case "equals":
      handleEquals();
      break;

    default:
      console.error("Unhandled case @ handleButtonClick");
  }
}
