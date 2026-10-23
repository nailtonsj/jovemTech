/*
let km = "8";
km = km * 3;
console.log("O valor da variavel é: " + km);
//Feito sem usar variavel
let total = 5 + 8 * 2 + 20 * 0.5;
total = `$R$${total.toFixed(2)}`; // Arredondando uma string
console.log(total);
*/

//Feito com variaveis certinho
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 8;
// let minutos = 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
// console.log("R$: ", total.toFixed(2));
// console.log(typeof total);

//Mude uma coisa por vez. Rode. Explique.

//1 troque km para 15. o que mudou na saída? Bate com a sua conta?
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 15;
// let minutos = 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
// console.log("R$: ", total.toFixed(2));
// console.log(typeof total);
// resultado 45.00 e number

//2 Acrescente tarifaBase= 6; no fim Leia a mensagem de erro inteira. O que ela está dizendo?
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 15;
// let minutos = 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
// console.log("R$: ", total.toFixed(2));
// console.log(typeof total);
// tarifaBase = 6;
//typeError: Assignment to constant variable
//Ela está dizendo que está tentando atribuir valor a uma variável que é constante e já tem valor definido.

//3 Calcule 3km e 45 min. Primeiro no corrida.md, depois no código. Deu igual?
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 3;
// let minutos = 45;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
// console.log("R$: ", total.toFixed(2));
// console.log(typeof total);
// 33,50 e number

//4 Rode typeof em cada variável. Qual é quantidade? Qual é etiqueta?
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 15;
// let minutos = 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;
// const tipos = [tarifaBase, km, precoPorKm, minutos, precoPorMinuto].map(
//   (v) => typeof v,
// );
// console.log(tipos);
// console.log("R$: ", total.toFixed(2));
// console.log(typeof total);
// [ 'number', 'number', 'number', 'number', 'number' ]
// R$:  45.00
// number

const prompt = require("prompt-sync")();
let km = prompt("Quantos km? "); // digite 8
console.log(km * 2);
console.log(km + 5);
console.log(typeof km);
