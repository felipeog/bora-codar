import { execSync } from "child_process";

import { user } from "../consts/user.js";

export function commitReadme() {
  console.log("Commiting...");

  quietExecSync(`git config user.email "${user.email}"`);
  quietExecSync(`git config user.name "${user.name}"`);
  quietExecSync("git add readme.md");

  try {
    quietExecSync('git commit -m "Update readme.md"');
    quietExecSync("git push -u origin HEAD");

    console.log("Done");
  } catch (error) {
    console.log("No changes to commit");
  }
}

function quietExecSync(command) {
  execSync(command, { stdio: "pipe" });
}
