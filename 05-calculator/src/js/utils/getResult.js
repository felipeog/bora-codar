import { formatNumber } from "./formatNumber";

// TODO: handle out of bounds
export function getResult(operation) {
  let result;

  if (operation.operator === "%") {
    result = eval(`${operation.left / 100} * ${operation.right}`);
  } else {
    result = eval(`${operation.left} ${operation.operator} ${operation.right}`);
  }

  return formatNumber(result);
}
