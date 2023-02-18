import { handleClear } from "../handlers/handleClear";
import { handleDecimal } from "../handlers/handleDecimal";
import { handleEquals } from "../handlers/handleEquals";
import { handleInverse } from "../handlers/handleInverse";
import { handleNumber } from "../handlers/handleNumber";
import { handleOperator } from "../handlers/handleOperator";

export function applyInput(value) {
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
      break;
  }
}
