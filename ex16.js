// Entrada de dados
const prompt = require(`prompt-sync`)();

//16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
//Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

//Entrada

let contador = 100;
let numerosPrimos = 0;

//Processamento
//Saida
while (numerosPrimos <= 50) {
  let qtdDivisor = 0;
  let divisor = 1;
  while (divisor <= contador) {
    if (contador % divisor === 0) {
      qtdDivisor++;
    }

    divisor++;
  }
  if (qtdDivisor === 2) {
    console.log(contador);
    numerosPrimos++;
  }
  contador++;
}
