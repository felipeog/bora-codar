import fs from "fs";
import glob from "glob";
import path from "path";

import { getCurrentDirectory } from "../utils/getCurrentDirectory.js";

export function getChallenges() {
  console.log("Getting challenges...");

  const currentDirectory = getCurrentDirectory(import.meta.url);
  const challengesGlobPattern = path.resolve(
    currentDirectory,
    "../../../**/challenge.json"
  );
  const challengesPaths = glob.sync(challengesGlobPattern);
  const challenges = challengesPaths.map((packagePath) => {
    const packageFileBuffer = fs.readFileSync(packagePath);

    return JSON.parse(packageFileBuffer);
  });

  console.log("Done");

  return challenges;
}
