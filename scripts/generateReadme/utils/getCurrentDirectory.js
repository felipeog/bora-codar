import path from "path";
import url from "url";

export function getCurrentDirectory(importMetaUrl) {
  const currentDirectory = path.dirname(url.fileURLToPath(importMetaUrl));

  return currentDirectory;
}
