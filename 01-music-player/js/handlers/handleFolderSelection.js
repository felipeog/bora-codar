import { state } from "../objects/state.js";

import { setCurrentMusic } from "../utils/setCurrentMusic.js";

export async function handleFolderSelection(_event) {
  if (!window.showDirectoryPicker) {
    return alert(
      "The application is not compatible with this browser." +
        "\n" +
        "Try it on Chrome, Edge or Opera."
    );
  }

  const dirHandle = await window.showDirectoryPicker();

  if (!dirHandle) {
    return;
  }

  state.playlist = [];

  for await (const value of dirHandle.values()) {
    if (value.kind !== "file") {
      continue;
    }

    const file = await value.getFile();

    if (file.type.startsWith("audio/")) {
      state.playlist.push(file);
    }
  }

  if (!state.playlist.length) {
    return alert("No audio files found.");
  }

  state.playlist.sort((a, b) => a.name.localeCompare(b.name));

  await setCurrentMusic(state.playlist[0]);
}
