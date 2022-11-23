export const getLongestElement = (arr) => {
  let longestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement;
};
