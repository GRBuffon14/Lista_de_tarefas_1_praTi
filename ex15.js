// Entrada de dados
const prompt = require(`prompt-sync`)();

//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
//que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
//respectivos.******

//Entrada
let numero;
let somaNumero = 0;
let peso;
let somaPeso = 0;
let total;

//Processamento

while (numero != 0) {
  numero = parseInt(prompt("Insira um número: "));
  if (numero != 0) {
    peso = parseFloat(prompt("Insira um peso: "));
    somaNumero += numero * peso;
    somaPeso += peso;
  }
}
total = somaNumero / somaPeso;

//Saída
console.log(`a média ponderada dos números inseridos é: ${total}`);
