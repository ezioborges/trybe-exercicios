let myArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Abramovic'];

function bigName (array) {
    let arraySize = array[0].length;
    let biggerString = array[0];
    for (let i = 0; i < array.length; i += 1) {
        let string = array[i].length
        if (string > arraySize) {
            biggerString = array[i]
            arraySize = string
        }
    }
    return biggerString;
}

console.log(bigName(myArray))

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-125.php#:~:text=function%20longest_str_in_array(arra)%20%7B%20let,%7D%20return%20ans%3B%20%7D%20console