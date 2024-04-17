// Entrada de dados
const prompt = require(`prompt-sync`)();

// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
//calcular e escrever o valor correspondente em graus Fahrenheit.

//Entrada
let tempC = parseFloat(prompt("Insira uma temperatura: "));
let tempF = 0;

//Processamento
tempF = tempC * 1.8 + 32;

//Saída
console.log(`A converção de ${tempC}°C em Fahrenheit é: ${tempF}°F`);
