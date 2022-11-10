import fs from "fs";
import { addQuotation } from "./functions.js";

const users = [];

const data = fs.readFileSync("users.txt", "utf8");

const lines = data.split("\n");

const validKeys = ["usr", "eme", "psw", "age", "loc", "fll"];

lines.forEach((line) => {
  if (line) {
    // Add data until the last line
    const lastUserIndex = users.length - 1 > 0 ? users.length - 1 : 0;
    const newUser = JSON.parse(addQuotation(line));

    users[lastUserIndex] = { ...users[lastUserIndex], ...newUser };
  } else {
    // Add a new user if the line is empty
    users.push({});
  }
});

// console.log(users);

// VALIDATE GOOD USERS

let contUsers = 0;
let lastUsername = "";

users.forEach((user) => {
  // get akk keys from user
  const userKeys = Object.keys(user);

  // validate if user has all valid keys
  const hasAllKeys = validKeys.every((key) => userKeys.includes(key));

  // validate if user has all valid keys and add to contUsers, also set last username
  if (hasAllKeys) {
    contUsers++;
    lastUsername = user.usr;
  }
});

console.log(contUsers + lastUsername);
