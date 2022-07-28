let estado = "reprovado";
let mensagem = "";

switch (estado) {
  case "aprovado":
    message = "Parabéns, você foi aprovada(o)!";
    break;
  case "reprovado":
    message = "Você foi reprovada(o)";
    break;
  case "lista":
    message = "Você está na nossa lista de espera";
    break;
  default:
    message = "estamos processando a avaliação em breve traremos o resultado";
}

console.log(message);
