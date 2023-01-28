const { WebSocket, WebSocketServer } = require("ws");
const { stripHtml } = require("string-strip-html");

const http = require("http");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const httpServer = http.createServer(app);
const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on("connection", (webSocket) => {
  console.log("connection");

  webSocket.on("message", (rawData) => {
    const data = JSON.parse(rawData);
    const sanitizedData = {
      ...data,
      payload: {
        ...data.payload,
        name: stripHtml(data.payload.name).result,
        message: stripHtml(data.payload.message).result,
      },
    };

    webSocketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(sanitizedData));
      }
    });
  });

  webSocket.on("error", (_event) => console.log("error"));

  webSocket.on("close", (_event) => console.log("close"));
});

httpServer.listen(process.env.PORT || 3000);
