import fs from "fs";
import path from "path";

import { getCurrentDirectory } from "./getCurrentDirectory.js";

export function updateaReadme(readmeContent) {
  console.log("Updating readme...");

  const currentDirectory = getCurrentDirectory(import.meta.url);

  fs.writeFileSync(
    path.resolve(currentDirectory, "../../../readme.md"),
    readmeContent
  );

  console.log("Done");
}
