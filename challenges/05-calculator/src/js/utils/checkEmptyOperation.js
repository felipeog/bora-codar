export function checkEmptyOperation(operation) {
  const isEmpty = Object.values(operation).every((item) => Number(item) === 0);

  return isEmpty;
}
