// Entrada de dados
const prompt = require(`prompt-sync`)();

//3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//● Some 25 ao primeiro inteiro;
//● Triplique o valor do segundo inteiro;
//● Modifique o valor do terceiro inteiro para 12% do valor original;
//● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
//dos primeiros três inteiros.

//Entrada
let n1 = parseInt(prompt("Insira o primeiro número: "));
let n2 = parseInt(prompt("Insira o segundo número: "));
let n3 = parseInt(prompt("Insira o terceiro número: "));
let n4 = parseInt(prompt("Insira o quarto número: "));

//Processamento
n4 = n1 + n2 + n3;
n1 += 25;
n2 *= 3;
n3 = (n3 * 12) / 100;

//Saída
console.log("----------------------------------");
console.log(`Resultado do primeiro número: ${n1}`);
console.log(`Resultado do segundo número: ${n2}`);
console.log(`Resultado do terceiro número: ${n3}`);
console.log(`Resultado do quarto número: ${n4}`);
