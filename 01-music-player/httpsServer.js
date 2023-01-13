const express = require("express");
const devcert = require("devcert");
const https = require("https");

const app = express();
const port = 3000;
const host = "localhost";

app.use(express.static(__dirname));

devcert
  .certificateFor(host)
  .then((ssl) => {
    const server = https.createServer(ssl, app);

    server.listen(port, host, null, (err) => {
      if (err) {
        throw new Error(`Error starting server >>>>> ${err}`);
      }

      console.log(`Server started @ https://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error generating SSL >>>>> ${err}`);
  });
