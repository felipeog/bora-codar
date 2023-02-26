export function setSvgElementAttributes(element, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttributeNS(null, key, value);
  });
}
