// Entrada de dados
const prompt = require(`prompt-sync`)();

//11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
//NEGATIVO.

//Entrada
let numero;
let parImpar;

//Processamento
//Saida
do {
  numero = parseInt(prompt("Insira um número: "));
  if (numero != null && numero != undefined && numero != NaN && numero > 0) {
    parImpar = numero % 2 === 0 ? "O número é par" : "O número é impar";
    console.log(parImpar);
    console.log("------------------------------");
  }
} while (numero != null && numero != undefined && numero != NaN && numero > 0);
