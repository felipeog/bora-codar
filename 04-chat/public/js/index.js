import { webSocket } from "./objects/webSocket.js";
import { elements } from "./objects/elements.js";

const id = crypto.randomUUID();

// functions
function connect() {
  webSocket.addEventListener("message", (event) => {
    console.log("websocket message", { event });

    const data = JSON.parse(event.data);
    const isMe = data.payload.id === id;
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
  });

  webSocket.addEventListener("open", (_event) => console.log("open"));
  webSocket.addEventListener("error", (_event) => console.error("error"));
  webSocket.addEventListener("close", (_event) => console.log("close"));

  elements.messageForm.addEventListener("submit", sendMessage);
}

function sendMessage(event) {
  event.preventDefault();

  if (!elements.nameInput.value) {
    return;
  }

  const data = {
    type: "message",
    payload: {
      name: elements.nameInput.value,
      message: elements.messageInput.value,
      date: new Date().toISOString(),
      id,
    },
  };

  webSocket.send(JSON.stringify(data));

  elements.messageInput.value = "";
}

// events
elements.nameForm.addEventListener("submit", (event) => {
  if (!elements.nameInput.value) {
    return event.preventDefault();
  }
});

window.addEventListener("load", () => {
  elements.nameFormDialog.showModal();

  connect();
});
