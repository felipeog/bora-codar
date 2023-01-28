import { handleMessageFormSubmit } from "./handlers/handleMessageFormSubmit.js";
import { handleNameFormSubmit } from "./handlers/handleNameFormSubmit.js";
import { handleWebSocketClose } from "./handlers/handleWebSocketClose.js";
import { handleWebSocketError } from "./handlers/handleWebSocketError.js";
import { handleWebSocketMessage } from "./handlers/handleWebSocketMessage.js";
import { handleWindowLoad } from "./handlers/handleWindowLoad.js";

import { elements } from "./objects/elements.js";
import { webSocket } from "./objects/webSocket.js";

elements.messageForm.addEventListener("submit", handleMessageFormSubmit);
elements.nameForm.addEventListener("submit", handleNameFormSubmit);

webSocket.addEventListener("close", handleWebSocketClose);
webSocket.addEventListener("error", handleWebSocketError);
webSocket.addEventListener("message", handleWebSocketMessage);

window.addEventListener("load", handleWindowLoad);
