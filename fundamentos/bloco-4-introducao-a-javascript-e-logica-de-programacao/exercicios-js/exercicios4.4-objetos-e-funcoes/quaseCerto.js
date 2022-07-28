const a = [9, 1, 2, 3, 9, 5, 7]
const b = [0, 4, 4, 4, 9, 2, 1]
const c = [0, 0, 0]
const d = [-2, -2, -1]

function count_duplicate(array){
 let counts = {}
let result = 0;
 for(let i = 0; i < array.length; i += 1){ 
    if (array[i] < 0) {
        return 1
    } else if(array[0] === 0 && array[1] !== 0) {
        return 1;
 }else if (counts[array[i]]){
     counts[array[i]] += 1
     } else {
     counts[array[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
             result = counts[prop]
        }
        
    }
  return result
}

console.log(count_duplicate(d))
/*  3 counted: 3 times.
    4 counted: 2 times.
    { '3': 3, '4': 2, '6': 1 }
*/