import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

function handleNameFormSubmit(event) {
  if (!elements.nameInput.value) {
    return event.preventDefault();
  }

  state.name = elements.nameInput.value;
}

export { handleNameFormSubmit };
