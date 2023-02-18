export function getResult(operation) {
  let result;

  if (operation.operator === "%") {
    result = eval(`${operation.left / 100} * ${operation.right}`);
  } else {
    result = eval(`${operation.left} ${operation.operator} ${operation.right}`);
  }

  // https://stackoverflow.com/a/3613112/10942224
  return Number(result.toFixed(4)).toString();
}
