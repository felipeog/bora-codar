import { elements } from "../objects/elements.js";

function handleWindowLoad(_event) {
  elements.nameFormDialog.showModal();
}

export { handleWindowLoad };
