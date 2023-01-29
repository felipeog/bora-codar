const { WebSocket, WebSocketServer } = require("ws");
const { stripHtml } = require("string-strip-html");

const http = require("http");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);
const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on("connection", (webSocket) => {
  console.log("webSocketServer connection", { webSocket });

  webSocket.on("message", (rawData) => {
    console.log("webSocket message", { rawData });

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

  webSocket.on("error", (event) => {
    console.log("webSocket error", { event });
  });
});

webSocketServer.on("error", (event) => {
  console.log("webSocketServer error", { event });
});

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
