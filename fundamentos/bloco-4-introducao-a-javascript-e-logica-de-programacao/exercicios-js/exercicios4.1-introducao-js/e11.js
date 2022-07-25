let wage = 3000;

if (wage <= 1556.94) {
  let discount = wage * 0.08;
  console.log(wage - discount);
} else if (wage > 1556.94 && wage <= 2594.92) {
  let discount = wage * 0.09;
  console.log(wage - discount);
} else if (wage > 2594.92 && wage <= 5189.82) {
  let discount = wage * 0.11;
  let wageTotal = wage - discount;
  if (wageTotal >= 1903.99 && wageTotal <= 2826.65) {
    let discountB = wageTotal * 0.075;
    let discountIR = discountB - 142.8;
    let wageFinal = wageTotal - discountIR;
    console.log(wageFinal);
  } else if (wageTotal >= 2826.66 && wageTotal <= 3751.05) {
    let discountB = wageTotal * 0.15;
    let discountIR = discountB - 354.8;
    let wageFinal = wageTotal - discountIR;
    console.log(wageFinal);
  } else if (wageTotal >= 3751.06 && wageTotal <= 4664.68) {
    let discountB = wageTotal * 0.225;
    let discountIR = discountB - 636.13;
    let wageFinal = wageTotal - discountIR;
    console.log(wageFinal);
  } else {
    let discountB = wageTotal * 0.275;
    let discountIR = discountB - 869.36;
    let wageFinal = wageTotal - discountIR;
    console.log(wageFinal);
  }
} else if (wage > 5189.82) {
  let discount = wage - 570.88;
  let discountB = discount * 0.275;
  let discountIR = discountB - 869.36;
  let wageFinal = wage - discountIR;

  console.log(parseFloat(wageFinal).toFixed(2));
} else {
  console.log("erro");
}
