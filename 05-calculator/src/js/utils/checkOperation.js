export function checkOperation(operation) {
  const isValid = Object.values(operation).every((item) => item !== null);

  return isValid;
}
