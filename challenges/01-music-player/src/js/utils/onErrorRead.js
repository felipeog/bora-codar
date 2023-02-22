import { elements } from "../objects/elements";
import { state } from "../objects/state";

import defaultBackground from "../../img/default-thumbnail.png";

/**
 * @typedef {import('@types/jsmediatags/types').jsmediatagsError} JSMediaTagsError
 * @param {JSMediaTagsError} error
 */
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
