const arr = [1, 2, 3];

const newArr = arr.map(element => {
  if (element === 3) {
    return 'funcionou';
  }
  return element;
});

console.log(newArr); // 👉️ ['z', 'b', 'c']

console.log(arr) // 👉️ ['a', 'b', 'c']
