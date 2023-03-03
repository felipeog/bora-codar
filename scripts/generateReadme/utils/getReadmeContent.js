import fs from "fs";
import path from "path";
import prettier from "prettier";

import { getCurrentDirectory } from "./getCurrentDirectory.js";

export function getReadmeContent(challenges) {
  console.log("Getting readme content...");

  const currentDirectory = getCurrentDirectory(import.meta.url);
  const templateFilePath = path.resolve(
    currentDirectory,
    "../readme-template.md"
  );
  const template = fs.readFileSync(templateFilePath, { encoding: "utf-8" });
  const challengesTable = getChallengeTable(challenges);
  const content = template.replace("<!-- challenges -->", challengesTable);
  const formattedContent = prettier.format(content, { parser: "markdown" });

  console.log("Done");

  return formattedContent;
}

function getChallengeTable(challenges) {
  const tableHead = `| Name | Code | Preview |\n` + `| --- | --- | --- |\n`;
  const tableBody = challenges
    .map((challenge) => {
      return `| ${challenge.name} | [Open code](${challenge.code}) | [Open preview](${challenge.preview}) |`;
    })
    .join("\n");
  const challengesTable = `${tableHead}${tableBody}`;

  return challengesTable;
}
