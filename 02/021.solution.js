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
  return [parseInt(gameIdNum), displays];
};

const red_max = 12;
const green_max = 13;
const blue_max = 14;

const validateDisplay = (display) => {
  const red = display.red || 0;
  const blue = display.blue || 0;
  const green = display.green || 0;
  return red <= red_max && blue <= blue_max && green <= green_max;
};

let idSum = 0;

for (const gameText of input) {
  const [id, displays] = parseGame(gameText);
  if (displays.every(validateDisplay)) idSum += id;
}

console.log(idSum);
