import { readmeSections } from "../consts/readmeSections.js";

export function getReadmeContent(challenges) {
  console.log("Getting readme content...");

  const challengesSection = formatChallengeSection(challenges);
  const orderedSections = [
    readmeSections.header,
    readmeSections.resources,
    challengesSection,
    readmeSections.workspaces,
  ];
  const content = orderedSections.join("\n");

  console.log("Done");

  return content;
}

function formatChallengeSection(challenges) {
  const title = `## Challenges`;
  const tableHead = `| Name | Code | Preview |\n` + `| --- | --- | --- |\n`;
  const tableBody = challenges
    .map((challenge) => {
      return `| ${challenge.name} | [Open code](${challenge.code}) | [Open preview](${challenge.preview}) |`;
    })
    .join("\n");

  return `${title}\n` + `\n` + `${tableHead}${tableBody}\n`;
}
