let myArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

result = [];

for (let i = 0; i < myArray.length; i += 1) {
  let division = myArray[i] / 2;
  result.push(division);
}

console.log(result);
