// Entrada de dados
const prompt = require(`prompt-sync`)();

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

//Entrada
let numero = parseInt(prompt("Insira um número: "));

//Processamento
//Saida
for (let i = 1; i <= 10; i++) {
  console.log(`${i}: ${numero}`);
}
