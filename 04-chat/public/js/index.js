import { handleMessageFormSubmit } from "./handlers/handleMessageFormSubmit.js";
import { handleNameFormSubmit } from "./handlers/handleNameFormSubmit.js";
import { handleWebSocketMessage } from "./handlers/handleWebSocketMessage.js";
import { handleWindowLoad } from "./handlers/handleWindowLoad.js";

import { elements } from "./objects/elements.js";
import { webSocket } from "./objects/webSocket.js";

elements.messageForm.addEventListener("submit", handleMessageFormSubmit);
elements.nameForm.addEventListener("submit", handleNameFormSubmit);

webSocket.addEventListener("close", (_event) => console.log("close"));
webSocket.addEventListener("error", (_event) => console.error("error"));
webSocket.addEventListener("message", handleWebSocketMessage);
webSocket.addEventListener("open", (_event) => console.log("open"));

window.addEventListener("load", handleWindowLoad);
