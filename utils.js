const fs = require("fs");

function* readLines(path) {
  const fileContents = fs.readFileSync(path);
  for (const line of fileContents.toString().split("\n")) {
    yield line;
  }
}

module.exports = {
  readLines,
};
