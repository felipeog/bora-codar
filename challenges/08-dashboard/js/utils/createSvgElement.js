export function createSvgElement(element) {
  const xmlns = "http://www.w3.org/2000/svg";

  return document.createElementNS(xmlns, element);
}
