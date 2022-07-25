
let value = 0;
let newArray = [];
let num = 50;

for (let i = 2; i < num; i += 1) {
    value += 1        
    if (value % 2 == 1) {
        newArray.push(value)
    }
    }

newArray = newArray.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
});

let primeNumber = Math.max(...newArray)

console.log(primeNumber);


// https://stackoverflow.com/questions/44533625/trying-to-find-prime-numbers-in-an-array

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max