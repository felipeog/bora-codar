import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

function padString(string) {
  return String(string).padStart(2, "0");
}

function formatDate(isoString) {
  const date = new Date(isoString);

  return padString(date.getHours()) + ":" + padString(date.getMinutes());
}

function handleWebSocketMessage(event) {
  console.log("message", { event });

  const data = JSON.parse(event.data);

  if (!data.payload.message) {
    return;
  }

  const isMe = data.payload.id === state.id;
  const newMessageItem = document.createElement("li");
  const date = formatDate(data.payload.date);
  const name = isMe ? "Você" : data.payload.name;

  newMessageItem.classList.value =
    "message-list__item" + (isMe ? " message-list__item--is-me" : "");
  newMessageItem.innerHTML = `
    <div class="message">
      <p class="message__meta">${name} - ${date}</p>
      <p class="message__text">${data.payload.message}</p>
    </div>
  `;

  elements.messageList.appendChild(newMessageItem);
  newMessageItem.scrollIntoView();
}

export { handleWebSocketMessage };
