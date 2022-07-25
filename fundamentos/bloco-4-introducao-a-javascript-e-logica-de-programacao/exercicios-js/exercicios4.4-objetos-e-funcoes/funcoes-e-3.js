let myArray = [2, 4, 6, 7, 10, 0, -3];

function small (array) {
    for (let i = 0; i < array.length; i += 1) {
        return Math.min(...array)
    }
}

console.log(small(myArray))