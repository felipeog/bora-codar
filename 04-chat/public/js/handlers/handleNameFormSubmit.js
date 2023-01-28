import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

function handleNameFormSubmit(event) {
  if (!elements.nameInput.value) {
    return event.preventDefault();
  }

  state.name = elements.nameInput.value.slice(0, 32);

  const fragments = state.name.split(" ");
  const firstFragment = fragments[0].charAt(0).toUpperCase();
  const secondFragment = fragments[1]
    ? fragments[1].charAt(0).toUpperCase()
    : "";

  elements.userName.textContent = state.name;
  elements.userInitials.textContent = `${firstFragment}${secondFragment}`;
}

export { handleNameFormSubmit };
