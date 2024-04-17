// Entrada de dados
const prompt = require(`prompt-sync`)();

//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
//aprovação).

//Entrada
let avaliacao1 = parseFloat(prompt("Insira a nota da primeira avaliação: "));
let avaliacao2 = parseFloat(prompt("Insira a nota da segunda avaliação: "));
let media;

//Processamento
media = (avaliacao1 + avaliacao2) / 2;

//Saida
if (
  avaliacao1 <= 10 &&
  avaliacao2 <= 10 &&
  avaliacao1 >= 0 &&
  avaliacao2 >= 0
) {
  if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
  }
} else {
  console.log("Erro! nota de avaliação invalida");
}
