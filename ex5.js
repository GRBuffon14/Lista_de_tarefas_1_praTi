//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
//média calculada seja menor que 6,0

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
  } else {
    console.log("Você foi REPROVADO! Estude mais’");
  }
} else {
  console.log("Erro! nota de avaliação invalida");
}
