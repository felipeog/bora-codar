function getCssVariableValue(property) {
  const value = getComputedStyle(document.body)
    .getPropertyValue(property)
    .trim();

  return value;
}

export { getCssVariableValue };
