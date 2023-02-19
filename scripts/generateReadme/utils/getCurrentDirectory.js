import path from "path";
import { fileURLToPath } from "url";

export function getCurrentDirectory(importMetaUrl) {
  return path.dirname(fileURLToPath(importMetaUrl));
}
