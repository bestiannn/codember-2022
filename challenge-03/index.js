import { colors } from "./colors.js";
import { getLongestElement } from "./functions.js";
// const colors = ["red", "green", "red", "green", "red", "green"];
// const colors = ["blue", "red", "blue", "red", "gray"];
// const colors = ["red", "blue", "red", "green", "red", "green", "red", "green"];

let actualSequence = [];
const sequences = [];

for (let i = 0; i < colors.length; i++) {
  if (i === 0) continue;

  let previousColor = colors[i - 1];
  let actualColor = colors[i];
  let nextColor = colors[i + 1];

  if (previousColor === nextColor) {
    actualSequence.push(previousColor);
  } else {
    actualSequence.push(previousColor);
    actualSequence.push(actualColor);

    sequences.push(actualSequence);
    actualSequence = [];
  }
}

const longestItemSequences = getLongestElement(sequences);
console.log(longestItemSequences);
console.log(`${longestItemSequences.length}@${longestItemSequences.at(-1)}`);
