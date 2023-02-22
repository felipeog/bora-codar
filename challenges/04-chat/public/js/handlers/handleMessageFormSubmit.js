import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";
import { webSocket } from "../objects/webSocket.js";

function handleMessageFormSubmit(event) {
  event.preventDefault();

  if (!state.name || !elements.messageInput.value) {
    return;
  }

  const data = {
    type: "message",
    payload: {
      name: state.name,
      message: elements.messageInput.value.slice(0, 128),
      date: new Date().toISOString(),
      id: state.id,
    },
  };

  webSocket.send(JSON.stringify(data));

  elements.messageInput.value = "";
}

export { handleMessageFormSubmit };
