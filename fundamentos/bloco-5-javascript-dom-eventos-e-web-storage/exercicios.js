/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */  

function paragraph () {
    return document.getElementById('p').innerText = 'Morando em Protugal, perto dos meus amigos'
}

paragraph()

function colorTrybe () {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
}

colorTrybe()

function whiteSquare () {
    document.querySelector('.center-content').style.backgroundColor = '#fff' 
}

whiteSquare()

function adjustedText () {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'
}

adjustedText()

function toUpperCase() {
    document.querySelectorAll('p').forEach(tag => {
        tag.innerHTML = tag.innerHTML.toUpperCase()
    })
}

toUpperCase()

// https://www.codeproject.com/Questions/1246443/Make-all-headings-touppercase

function consoleLog () {
    
    document.querySelectorAll('p').forEach(tag => {
        tag.innerText = console.log(tag.innerText)
    })
}

consoleLog()

