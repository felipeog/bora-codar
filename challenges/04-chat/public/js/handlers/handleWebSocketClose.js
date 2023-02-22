import { elements } from "../objects/elements.js";

const values = {
  1000: "Normal Closure",
  1001: "Going Away",
  1002: "Protocol error",
  1003: "Unsupported Data",
  1005: "No Status Rcvd",
  1006: "Abnormal Closure",
  1007: "Invalid frame payload data",
  1008: "Policy Violation",
  1009: "Message Too Big",
  1010: "Mandatory Ext.",
  1011: "Internal Error",
  1012: "Service Restart",
  1013: "Try Again Later",
  1014: "Bad Gateway",
  1015: "TLS handshake",
};

function handleWebSocketClose(event) {
  alert("O chat foi fechado.");

  elements.nameInput.disabled = true;
  elements.nameButton.disabled = true;
  elements.messageInput.disabled = true;
  elements.messageButton.disabled = true;

  console.log("close", { event });
  console.log(values[event.code] ?? "Unknown");
}

export { handleWebSocketClose };
