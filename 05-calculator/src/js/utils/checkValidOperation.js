export function checkValidOperation(operation) {
  const isValid = Object.values(operation).every((item) => item !== null);

  return isValid;
}
