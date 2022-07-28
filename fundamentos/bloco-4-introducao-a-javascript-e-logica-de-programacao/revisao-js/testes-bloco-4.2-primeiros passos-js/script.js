// 1 - PRIMEIROS PASSOS - Variáveis

// const myName = "Ezio";
// const birthCity = "Imbutiba - SC";
// let birthYear = 1993;
// birthYear = 2030;
// birthCity = "Floripa";

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: "Ana",
//   lastName: "Santos",
// };
// const patientEmail = "ana@email.com";

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

// 2 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

// const base = 5;
// let height = 8;

// const area = base * height;
// const perimeter = base + base + height + height;

// console.log(area);
// console.log(perimeter);

// 3 - CONDIÇÕES if E else

// const nota = 70;

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// } else if (nota < 80 && nota >= 60) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovada(o)");
// }

// 5 - OPERADORES LÓGICOS

// OPERADOR LÓGICO &&

// const conditionOne = true;
// const conditionTwo = true;

// console.log(conditionOne && conditionTwo);

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// const currentHour = 12;
// let message = "";

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour > 11 && currentHour < 14) {
//   message = "Hora do almoço!!!";
// } else if (currentHour >= 4 && currentHour < 14) {
//   message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);

// OPERADOR LÓGICO||

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let weekDay = "domingo";

// if (
//   weekDay === "segunda-feira" ||
//   weekDay === "terça-feira" ||
//   weekDay === "quarta-feira" ||
//   weekDay === "quinta-feira" ||
//   weekDay === "sexta-feira"
// ) {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else if (weekDay === "sábado" || weekDay === "domingo") {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

// OPERADOR NOT
