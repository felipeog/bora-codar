import { elements } from "./objects/elements";

elements.range.addEventListener("input", (event) => {
  elements.image.style.backgroundPositionY = `${event.target.value * 253}px`;
});

elements.activateButton.addEventListener("click", (event) => {
  elements.activateButton.classList.add("hidden");
  elements.deactivateButton.classList.remove("hidden");
  elements.range.classList.remove("hidden");
});

elements.deactivateButton.addEventListener("click", (event) => {
  elements.activateButton.classList.remove("hidden");
  elements.deactivateButton.classList.add("hidden");
  elements.range.classList.add("hidden");

  elements.image.style.backgroundPositionY = 0;
  elements.range.value = 0;
});
