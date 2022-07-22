const productValue = 1.5;
const saleValue = 3;

let feesproduct = productValue * 0.2 + productValue;
let lucroUnidade = saleValue - feesproduct;
let lucro = lucroUnidade;

if (lucroUnidade > 0) {
  console.log(lucro * 1000);
} else {
  console.log("Algo deu errado! Calcule novamente");
}
