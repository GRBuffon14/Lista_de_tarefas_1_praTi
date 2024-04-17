// Entrada de dados
const prompt = require(`prompt-sync`)();

//9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
//do mesmo, conforme a tabela abaixo:

//Entrada
let codigoOrigem = parseInt(prompt("Insira o código de origem do produto: "));

//Processamento
//Saída
if (codigoOrigem === 1) {
  console.log("Produto do Sul!");
} else if (codigoOrigem === 2) {
  console.log("Produto do Norte!");
} else if (codigoOrigem === 3) {
  console.log("Produto do Leste!");
} else if (codigoOrigem === 4) {
  console.log("Produto do Oeste!");
} else if (codigoOrigem === 5 || codigoOrigem === 6) {
  console.log("Produto do Nordeste!");
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
  console.log("Produto do Sudeste!");
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
  console.log("Produto do Centro-Oeste!");
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
  console.log("Produto do Nordeste!");
} else {
  console.log("Produto Importado");
}
