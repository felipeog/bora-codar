const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { WebSocket, WebSocketServer } = require("ws");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const server = createServer(app);
const wss = new WebSocketServer({ server });

const users = [];

wss.on("connection", (ws) => {
  console.log("connection");

  ws.on("message", (rawData) => {
    const data = JSON.parse(rawData, null, 2);

    if (data.type === "add-user") {
      users.push(data.payload.id);

      wss.clients.forEach((client) => {
        // if (client !== ws && client.readyState === WebSocket.OPEN) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "update-users",
              payload: {
                users,
              },
            })
          );
        }
      });

      return;
    }

    // ws.send();
  });

  ws.on("error", () => {
    console.log("error");
  });

  ws.on("close", () => {
    console.log("close");
  });
});

server.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
