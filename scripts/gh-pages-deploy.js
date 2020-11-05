const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Checkout Branch...");

    await execa("yarn", ["run", "build"]);
    console.log("Building...");

    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Commit...");

    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    console.log("Pushing to gh-pages...");

    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Remove all...");

    console.log("Successfully deployed");

  } catch (e) {
    console.log(e.message);
    process.exit(1);

  }

})();
