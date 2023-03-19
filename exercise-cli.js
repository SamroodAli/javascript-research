const fs = require("node:fs/promises");
const path = require("node:path");
const { stdin: input, stdout: output } = require("node:process");
const { createInterface } = require("node:readline/promises");
const serveHandler = require("serve-handler");
const http = require("node:http");

(async () => {
  let dirs = await fs.readdir(path.resolve(__dirname), {
    withFileTypes: true,
  });

  const ignored = new Set([".git", "node_modules"]);

  dirs = dirs.filter((each) => each.isDirectory() && !ignored.has(each.name));

  dirs.forEach((dir, index) => {
    console.log(`${index + 1}: ${dir.name}`);
  });

  const userInput = createInterface({ input, output });

  const answer = parseInt(
    await userInput.question(
      "Which exercise folder do you want to run on the browser ?\n(folder number):"
    )
  );

  userInput.close();

  const servingDirectory = dirs[answer - 1]?.name;

  if (!servingDirectory) {
    console.error("Please specify a directory number from the given list");
    return;
  }

  const servingDirectoryPath = path.join(__dirname, servingDirectory);

  const server = http.createServer(async function (req, res) {
    await serveHandler(req, res, {
      public: servingDirectoryPath,
    });
  });

  server.listen(3000, () => {
    console.log("\n\n\n********************************************");
    console.log(`serving directory ${servingDirectory}`);
    console.log("started listening on http://localhost:3000");
    console.log("********************************************\n\n\n");
    console.log("Press control + C to exit");
  });
})();
