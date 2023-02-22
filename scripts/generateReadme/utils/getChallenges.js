import fs from "fs";
import glob from "glob";
import path from "path";

import { getCurrentDirectory } from "../utils/getCurrentDirectory.js";

export function getChallenges() {
  console.log("Getting challenges...");

  const currentDirectory = getCurrentDirectory(import.meta.url);
  const packagesGlobPattern = path.resolve(
    currentDirectory,
    "../../../challenges/*/package.json"
  );
  const packagesPaths = glob.sync(packagesGlobPattern);
  const challenges = packagesPaths.map((packagePath) => {
    const packageFileBuffer = fs.readFileSync(packagePath);
    const packageFile = JSON.parse(packageFileBuffer);

    return {
      name: packageFile?.name ?? "missing name",
      code: packageFile?.repository?.url ?? "missing code",
      preview: packageFile?.homepage ?? "missing preview",
    };
  });

  console.log("Done");

  return challenges;
}
