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
  console.log("connection", { webSocket });

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

  webSocket.on("close", (event) => {
    console.log("close", { event });
  });

  webSocket.on("error", (event) => {
    console.log("error", { event });
  });

  webSocket.on("open", (event) => {
    console.log("open", { event });
  });

  webSocket.on("ping", (event) => {
    console.log("ping", { event });
  });

  webSocket.on("pong", (event) => {
    console.log("pong", { event });
  });

  webSocket.on("redirect", (event) => {
    console.log("redirect", { event });
  });

  webSocket.on("unexpected-response", (event) => {
    console.log("unexpected-response", { event });
  });

  webSocket.on("upgrade", (event) => {
    console.log("upgrade", { event });
  });
});

webSocketServer.on("close", (event) => {
  console.log("close", { event });
});

webSocketServer.on("error", (event) => {
  console.log("error", { event });
});

webSocketServer.on("headers", (event) => {
  console.log("headers", { event });
});

webSocketServer.on("listening", (event) => {
  console.log("listening", { event });
});

webSocketServer.on("wsClientError", (event) => {
  console.log("wsClientError", { event });
});

httpServer.listen(process.env.PORT || 3000);
