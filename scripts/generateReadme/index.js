import fs from "fs";
import path from "path";

import { user } from "./consts/user.js";
import { commitReadme } from "./utils/commitReadme.js";
import { getChallenges } from "./utils/getChallenges.js";
import { getCurrentDirectory } from "./utils/getCurrentDirectory.js";
import { getReadmeContent } from "./utils/getReadmeContent.js";

export function generateReadme() {
  const currentDirectory = getCurrentDirectory(import.meta.url);
  const challenges = getChallenges();
  const readmeContent = getReadmeContent(challenges);

  fs.writeFileSync(
    path.resolve(currentDirectory, "../../readme.md"),
    readmeContent
  );

  if (process.env.NODE_ENV !== "development") {
    commitReadme(user);
  }
}

generateReadme();
