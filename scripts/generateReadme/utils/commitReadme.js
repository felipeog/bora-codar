import { execSync } from "child_process";

import { user } from "../consts/user.js";

export function commitReadme() {
  console.log("Commiting...");

  try {
    quietExecSync(`git config user.email "${user.email}"`);
    quietExecSync(`git config user.name "${user.name}"`);
    quietExecSync("git add readme.md");
    quietExecSync(
      'git diff-index --quiet HEAD || git commit -m "Update readme.md"'
    );
    quietExecSync("git push -u origin HEAD");

    console.log("Done");
  } catch (error) {
    console.log(`Error commiting: ${error}`);
  }
}

function quietExecSync(command) {
  execSync(command, { stdio: "pipe" });
}
