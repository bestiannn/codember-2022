let minValue = 11098;
let maxValue = 98123;
const correctValues = [];

for (let i = minValue; i < maxValue + 1; i++) {
  let actualValue = String(i);

  //   digits in array
  let digits = [];
  for (let digit of actualValue) {
    digits.push(Number(digit));
  }

  //   check if digits have 2 times the number 5
  let countOfFive = 0;
  for (let digit of digits) {
    if (digit === 5) {
      countOfFive++;
    }
  }

  //   check if digits are in ascending order
  let isAscending = true;
  for (let l = 0; l < digits.length - 1; l++) {
    if (digits[l] > digits[l + 1]) {
      isAscending = false;
    }
  }

  //   validating if the value is correct
  if (countOfFive >= 2 && isAscending) {
    correctValues.push(actualValue);
  }
}
console.log(correctValues);

console.log(`${correctValues.length}-${correctValues[55]}`);
