let myArrey = [22, 7, 20, 67, 10, 12];

function bigger (array) {
    for(let i = 0; i < array.length; i += i) {
        return Math.max(...array)
    }
    
}

console.log(bigger(myArrey))
