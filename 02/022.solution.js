const { readLines } = require("../utils");

const input = readLines("02/input.txt");

const trim = (x) => x.trim();

const parseCube = (cube) => {
  const [count, color] = cube.trim().split(" ");
  return { color, count: parseInt(count) };
};

const parseDisplay = (display) => {
  const cubes = display.trim().split(",").map(parseCube);
  return cubes.reduce((acc, { color, count }) => {
    acc[color] = count;
    return acc;
  }, {});
};

const parseGame = (game) => {
  const [gameId, allDisplays] = game.split(":").map(trim);
  const [_, gameIdNum] = gameId.split(" ");
  const displays = allDisplays.split(";").map(trim).map(parseDisplay);
  const minRed = Math.max(...displays.map((d) => d.red || 0));
  const minGreen = Math.max(...displays.map((d) => d.green || 0));
  const minBlue = Math.max(...displays.map((d) => d.blue || 0));
  const power = minRed * minGreen * minBlue;
  return [parseInt(gameIdNum), displays, power];
};

let powerSum = 0;

for (const gameText of input) {
  const [id, displays, power] = parseGame(gameText);
  powerSum += power;
}

console.log(powerSum);
