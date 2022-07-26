let myArray = [2, 3, 2, 5, 8, 2, 3, 3, 3];

function numRepeat(array)
{
    if(array.length == 0)
        return null;
    let modeMap = {};
    let bigValue = array[0], count = 1;
    for(let i = 0; i < array.length; i += 1)
    {
        let element = array[i];
        if(modeMap[element] == null)
            modeMap[element] = 1;
        else
            modeMap[element]++;  
        if(modeMap[element] > count)
        {
            bigValue = element;
            count = modeMap[element];
        }
    }
    return bigValue;
}

console.log(numRepeat(myArray))

// https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array