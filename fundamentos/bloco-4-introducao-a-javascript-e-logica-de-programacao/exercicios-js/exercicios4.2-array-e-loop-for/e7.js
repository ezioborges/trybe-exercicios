let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
  smallNumber = Math.min(...numbers);
}

console.log(smallNumber);
