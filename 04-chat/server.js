const { createServer } = require("http");
const path = require("path");
const express = require("express");
const { WebSocket, WebSocketServer } = require("ws");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("connection");

  ws.on("message", (rawData) => {
    const data = JSON.parse(rawData);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on("error", () => {
    console.log("error");
  });

  ws.on("close", () => {
    console.log("close");
  });
});

server.listen(process.env.PORT || 3000);
