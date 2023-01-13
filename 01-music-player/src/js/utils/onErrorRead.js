import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

import defaultBackground from "../../img/default-thumbnail.png";

export function onErrorRead(error) {
  console.error(error);

  const title = state.currentMusic.name ?? "Unknown title";
  const artist = "Unknown artist";

  elements.thumbnail.src = defaultBackground;
  elements.thumbnail.alt = "";
  elements.thumbnail.title = "";

  elements.header.textContent = title;
  elements.header.title = title;

  elements.subheader.textContent = artist;
  elements.subheader.title = artist;
}
