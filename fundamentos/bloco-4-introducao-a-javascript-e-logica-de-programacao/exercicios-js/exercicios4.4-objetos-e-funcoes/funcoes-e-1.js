function polindromo (string) {
    let reverse = '';
    for (let i = 0; i < string.length; i += 1) {
        reverse = string.split('')
    }
    let reverseResult = reverse.reverse('').join('')
    return reverseResult
}

console.log(polindromo('reviver'))