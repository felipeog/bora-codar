const location = document.location;
const isHttps = location.protocol === "https:";
const scheme = `ws${isHttps ? "s" : ""}`;
const url = `${scheme}://${location.hostname}:${location.port}`;
const webSocket = new WebSocket(url, "json");

export { webSocket };
