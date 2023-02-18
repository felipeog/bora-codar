import { formatNumber } from "./formatNumber";
import { bounds } from "../consts/bounds";

export function getResult(operation) {
  if (operation.operator === "/" && Number(operation.right) === 0) {
    return {
      result: null,
      error: "[Error] Division by zero",
    };
  }

  const result = applyOperation(operation);

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

function applyOperation(operation) {
  if (operation.operator === "%") {
    return eval(`${operation.left / 100} * ${operation.right}`);
  }

  return eval(`${operation.left} ${operation.operator} ${operation.right}`);
}
