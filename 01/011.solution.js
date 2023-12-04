const { readLines } = require("../utils");

const rows = readLines("01/input.txt");

const digits = /\d/g;

let sum = 0;

for (const r of rows) {
  const matches = r.match(digits);
  sum += parseInt(`${matches[0]}${matches[matches.length - 1]}`);
}

console.log(sum);
