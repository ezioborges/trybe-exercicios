let xadrez = "";
let peca = "REI".toLowerCase();

switch (peca) {
  case "peao":
    xadrez = console.log("movimente uma casa para frente");
    break;
  case "torre":
    xadrez = console.log("movimente quantas casas quiser em linha reta");
    break;
  case "cavelo":
    xadrez = console.log(
      "movimento em L. Duas casas em linha reta mais uma casa para esquerda ou direita. Você pode passar por cima das pŕoprias peças"
    );
    break;
  case "bispo":
    xadrez = console.log("movimente quantas casas quiser em diagonal");
    break;
  case "rainha":
    xadrez = console.log(
      "movimente quantas casas quiser em linha reta ou diagonal"
    );
    break;
  case "rei":
    xadrez = console.log("movimente uma casa em qualquer direção");
    break;
  default:
    xadrez = console.log("Essa peça não é válida");
}
