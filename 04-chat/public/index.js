let ws;

const id = crypto.randomUUID();

const nameFormDialog = document.querySelector(".name-form-dialog");
const nameForm = document.querySelector(".name-form");
const messageForm = document.querySelector(".message-form");
const messageList = document.querySelector(".message-list");
const nameInput = document.querySelector("input[name=name]");
const messageInput = document.querySelector("input[name=message]");

function connect() {
  const location = document.location;
  const isHttps = location.protocol === "https:";
  const scheme = `ws${isHttps ? "s" : ""}`;
  const serverUrl = `${scheme}://${location.hostname}:${location.port}`;

  ws = new WebSocket(serverUrl, "json");

  ws.addEventListener("message", (event) => {
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

    messageList.appendChild(newMessageItem);
    newMessageItem.scrollIntoView();
  });

  ws.addEventListener("open", (event) => {
    console.log("websocket open", { event });
  });

  ws.addEventListener("error", (event) => {
    console.error("websocket error", { event });
  });

  ws.addEventListener("close", (event) => {
    console.log("websocket close", { event });
  });

  messageForm.addEventListener("submit", sendMessage);
}

function sendMessage(event) {
  event.preventDefault();

  if (!nameInput.value) {
    return;
  }

  const data = {
    type: "message",
    payload: {
      name: nameInput.value,
      message: messageInput.value,
      date: new Date().toISOString(),
      id,
    },
  };

  ws.send(JSON.stringify(data));

  messageInput.value = "";
}

nameForm.addEventListener("submit", (event) => {
  if (!nameInput.value) {
    return event.preventDefault();
  }
});

window.addEventListener("load", () => {
  nameFormDialog.showModal();

  connect();
});
