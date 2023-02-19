import { user } from "./consts/user.js";
import { commitReadme } from "./utils/commitReadme.js";
import { getChallenges } from "./utils/getChallenges.js";
import { getReadmeContent } from "./utils/getReadmeContent.js";
import { updateaReadme } from "./utils/updateReadme.js";

export function generateReadme() {
  const challenges = getChallenges();
  const readmeContent = getReadmeContent(challenges);

  updateaReadme(readmeContent);

  if (process.env.NODE_ENV !== "development") {
    commitReadme(user);
  }
}

generateReadme();
