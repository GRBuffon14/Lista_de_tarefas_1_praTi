// Entrada de dados
const prompt = require(`prompt-sync`)();

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

//Entrada
let quantidadeMacas = parseInt(
  prompt("Insira a quantidade de maçãs compradas: ")
);
let total;

//Processamento
//Saída
if (quantidadeMacas < 0) {
  console.log(`Erro!, valor invalido`);
} else if (quantidadeMacas < 12) {
  total = quantidadeMacas * 0.3;
  console.log(`Valor total das maçãs: R$ ${total.toFixed(2)}`);
} else {
  total = quantidadeMacas * 0.25;
  console.log(`Valor total das maçãs: R$ ${total.toFixed(2)}`);
}
