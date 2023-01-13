import { elements } from "../objects/elements";

export function onSuccessRead(result) {
  const artist = result?.tags?.artist ?? "Unknown artist";
  const title = result?.tags?.title ?? "Unknown title";
  const album = result?.tags?.album ?? "Unknown album";
  const pictureData = result?.tags?.picture?.data ?? [];
  const base64String = pictureData.reduce((acc, cur) => {
    return `${acc}${String.fromCharCode(cur)}`;
  }, "");

  elements.thumbnail.src =
    "data:" + pictureData.format + ";base64," + window.btoa(base64String);
  elements.thumbnail.alt = album;
  elements.thumbnail.title = album;

  elements.header.textContent = title;
  elements.header.title = title;

  elements.subheader.textContent = artist;
  elements.subheader.title = artist;
}
