import { elements } from "../objects/elements.js";

function handleWebSocketError(event) {
  alert("Ocorreu um erro e o chat foi fechado.");

  elements.nameInput.disabled = true;
  elements.nameButton.disabled = true;
  elements.messageInput.disabled = true;
  elements.messageButton.disabled = true;

  console.log("error", { event });
}

export { handleWebSocketError };
