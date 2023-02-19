import { readmeSections } from "../consts/readmeSections.js";

export function getReadmeContent(challenges) {
  console.log("Getting readme content...");

  const challengesSection = formatChallengeSection(challenges);
  const orderedSections = [
    readmeSections.header,
    challengesSection,
    readmeSections.resources,
  ];
  const content = orderedSections.join("\n");

  console.log("Done");

  return content;
}

function formatChallengeSection(challenges) {
  const title = `## Challenges`;
  const tableHeader = `| Name | Code | Preview |\n` + `| --- | --- | --- |`;
  const formattedChallenges = challenges
    .map((challenge) => {
      return `| ${challenge.name} | [Open code](${challenge.code}) | [Open preview](${challenge.preview}) |`;
    })
    .join("\n");

  return `${title}\n` + `\n` + `${tableHeader}\n${formattedChallenges}\n`;
}
