// Entrada de dados
const prompt = require(`prompt-sync`)();

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

//Entrada
let valor1 = parseInt(prompt("Insira o primeiro valor: "));
let valor2 = parseInt(prompt("Insira o segundo valor: "));

//Processamento
if (valor1 === valor2) {
  console.log("Valores iguais são invalidos!");
}
let maior = valor1 < valor2 ? valor2 : valor1;
let menor = valor1 < valor2 ? valor1 : valor2;

//Saída
console.log(`A ordem crescente dos números é: ${menor} e ${maior}`);
