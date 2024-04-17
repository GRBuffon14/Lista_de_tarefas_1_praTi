// Entrada de dados
const prompt = require(`prompt-sync`)();

//6. Ler três valores para os lados de um triângulo: A, B e C.
//Verificar se os lados fornecidos formam realmente um triângulo. Caso forme,
//deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let ladoA = parseInt(prompt("Insira o comprimento do primeiro lado: "));
let ladoB = parseInt(prompt("Insira o comprimento do segundo lado: "));
let ladoC = parseInt(prompt("Insira o comprimento do terceiro lado: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  console.log("É possível formar um triângulo com essas medidas.");
  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    console.log("O triângulo formado é um Triângulo eqüilátero");
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    console.log("O triângulo formado é um Triângulo escaleno");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo formado é um Triângulo isósceles ");
  }
} else {
  console.log("Não é possível formar um Triângulo");
}
