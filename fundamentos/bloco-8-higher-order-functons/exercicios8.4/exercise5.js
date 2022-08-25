const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, currWord) =>
    acc + currWord.split('').reduce((accWord, currLetter) => {
      if (currLetter === 'a' || currLetter === 'A') return accWord + 1
      return accWord;
    }, 0), 0)
}


// function containsA() {
//   return names.reduce((acc, currWord) =>
//     acc + currWord.split('').reduce((accWord, currLetter) => {
//       if (currLetter === 'a' || currLetter === 'A') return accWord + 1;
//       return accWord;
//     }, 0), 0);
// }

console.log(containsA());