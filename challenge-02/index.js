import fs from "fs";
import { ascii } from "./ascii.js";

const data = fs.readFileSync("./encrypted.txt", "utf8");
const dataValues = [];

let decrypted = "";
let actualValue = "";

for (let value of String(data)) {
  if (Object.keys(ascii).includes(actualValue)) {
    dataValues.push(actualValue);
    actualValue = "";
  }
  if (value === " ") {
    dataValues.push(" ");
    actualValue = "";
  } else {
    actualValue += value;
  }
}
dataValues.push(actualValue);

for (let value of dataValues) {
  value === " " ? (decrypted += " ") : (decrypted += ascii[value]);
}
console.log(decrypted);
