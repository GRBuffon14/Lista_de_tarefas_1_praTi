// Entrada de dados
const prompt = require(`prompt-sync`)();

//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

//Entrada
let contatodor = -1;
let numero;
let media = 0;

//Processamento
while (numero != 0) {
  numero = parseInt(prompt("Insira um número: "));
  media += numero;
  contatodor++;
}
media = media / contatodor;

//Saída
console.log(`a média dos números inseridos é: ${media}`);
