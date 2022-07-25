let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // EXERCICIO 1
  
  //   console.log('Bem-vinda, ' + info.personagem)
  
  //  <------------------------>
  
//   EXERCICIO 2

  info.recorrente = 'sim'
//   console.log(info)

//  EXERCICIO 3

for (key in info) {
    // console.log(key)
}

  //  <------------------------>

//   EXERCICIO 4

for (key in info) {
    // console.log(info[key])
}

//  EXERCICIO 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

// console.log(info.personagem + ' e ' + info2.personagem )
// console.log(info.origem + ' e ' + info2.origem )
// console.log(info.nota + ' e ' + info2.nota )
// console.log('ambos são ' + info2.recorrente )

  //  <------------------------>

//  EXERCICIO 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },

    ]
  };

//   console.log("O livro favorito de " + leitor['nome'] + " " + leitor['sobrenome'] + " se chama " + leitor['livrosFavoritos'][0]['titulo'])

    //  <------------------------>

    // EXERCICIO 7

leitor['livrosFavoritos'][1] =  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

//   console.log(leitor)
console.log("Julia tem 2 livros favoritos: " + leitor['livrosFavoritos'][0]['titulo'] + ' e ' + leitor['livrosFavoritos'][1]['titulo'])