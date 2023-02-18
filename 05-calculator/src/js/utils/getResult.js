import { formatNumber } from "./formatNumber";
import { bounds } from "../consts/bounds";

export function getResult(operation) {
  let result;

  if (operation.operator === "%") {
    result = eval(`${operation.left / 100} * ${operation.right}`);
  } else if (operation.operator === "/" && Number(operation.right) === 0) {
    return {
      result: null,
      error: "[Error] Division by zero",
    };
  } else {
    result = eval(`${operation.left} ${operation.operator} ${operation.right}`);
  }

  if (result < bounds.lower || result > bounds.upper) {
    return {
      result: null,
      error: "[Error] Out of bounds",
    };
  }

  return {
    result: formatNumber(result),
    error: false,
  };
}
