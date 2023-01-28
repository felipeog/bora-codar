import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

function handleWebSocketMessage(event) {
  console.log("websocket message", { event });

  const data = JSON.parse(event.data);
  const isMe = data.payload.id === state.id;
  const newMessageItem = document.createElement("li");
  const date = new Date(data.payload.date);

  newMessageItem.classList.value = `message-list__item ${
    isMe ? "message-list__item--is-me" : ""
  }`;
  newMessageItem.textContent =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    " - " +
    (isMe ? "Você" : data.payload.name) +
    ": " +
    data.payload.message;

  elements.messageList.appendChild(newMessageItem);
  newMessageItem.scrollIntoView();
}

export { handleWebSocketMessage };
