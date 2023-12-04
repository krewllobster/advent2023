const { readLines } = require("../utils");

const rows = readLines("01/input.txt");

const nums = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
];

const parseRow = (row) => {
  const numberIndices = [];
  for (const [word, digit] of nums) {
    let i = row.indexOf(word);
    while (i !== -1) {
      numberIndices.push([i, word.length, word, digit]);
      i = row.indexOf(word, i + 1);
    }
  }
  for (const [word, digit] of nums) {
    let i = row.indexOf(digit);
    while (i !== -1) {
      numberIndices.push([i, digit.length, digit, digit]);
      i = row.indexOf(digit, i + 1);
    }
  }
  const sortedIndices = numberIndices.sort((a, b) => a[0] - b[0]);
  const firstNumber = sortedIndices[0];
  const lastNumber = sortedIndices[sortedIndices.length - 1];

  return parseInt(`${firstNumber[3]}${lastNumber[3]}`);
};

let sum = 0;

for (const r of rows) {
  sum += parseRow(r);
}

console.log(sum);
