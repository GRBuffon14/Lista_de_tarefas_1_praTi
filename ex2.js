// Entrada de dados
const prompt = require(`prompt-sync`)();

//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.******

//Entrada
let eleitores = parseInt(prompt("Insira o número de eleitores: "));
let votosBrancos = parseInt(prompt("Insira o número de votos em branco: "));
let percentualVotosBrancos;
let votosNulos = parseInt(prompt("Insira o número de votos nulos: "));
let percentualVotosNulos;
let votosVálidos = parseInt(prompt("Insira o número de votos válidos: "));
let percentualVotosValidos;
let validarEleitores = votosBrancos + votosNulos + votosVálidos;

//Processamento
if (eleitores < validarEleitores) {
  console.log("Erro! número de votos maior que o número de eleitores");
} else {
  percentualVotosBrancos = (votosBrancos * 100) / eleitores;
  percentualVotosNulos = (votosNulos * 100) / eleitores;
  percentualVotosValidos = (votosVálidos * 100) / eleitores;
}

//Saida
console.log("---------------------------------------");
console.log(`O percentual de votos em branco é: ${percentualVotosBrancos}%`);
console.log(`O percentual de votos nulos é: ${percentualVotosNulos}%`);
console.log(`O percentual de votos válidos é: ${percentualVotosValidos}%`);
