let array = ['java', 'javascript', 'python', 'html', 'css'];

let word = [];

for (let i = 0; i < array.length; i += 1) {
    let newArray = [...array[i]].length
    word.push(newArray)
    
}

let bigger = Math.max(...word);
let smaller = Math.min(...word)

console.log(bigger, array[1])
console.log(smaller, array[4])

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://www.codegrepper.com/code-examples/javascript/convert+word+to+array+javascript