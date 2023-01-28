const http = require("http");
const path = require("path");
const express = require("express");
const { WebSocket, WebSocketServer } = require("ws");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const httpServer = http.createServer(app);
const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on("connection", (webSocket) => {
  console.log("connection");

  webSocket.on("message", (rawData) => {
    const data = JSON.parse(rawData);

    webSocketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  webSocket.on("error", () => console.log("error"));

  webSocket.on("close", () => console.log("close"));
});

httpServer.listen(process.env.PORT || 3000);
