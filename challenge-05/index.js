import { mecenas } from "./mecenas.js";

const mecenasBackup = [...mecenas];
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(mecenas);

while (mecenas.length > 1) {
  for (let i = 0; i < mecenas.length; i++) {
    mecenas[i + 1] ? mecenas.splice(i + 1, 1) : mecenas.splice(0, 1);
  }
  console.log(mecenas);
}

// Posibles solutions...

for (let mecenaRepeatIndex in mecenasBackup) {
  if (mecenasBackup[mecenaRepeatIndex] === mecenas[0]) {
    console.log(`${mecenas}-${mecenaRepeatIndex}`);
  }
}
