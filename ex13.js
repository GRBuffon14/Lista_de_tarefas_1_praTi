// Entrada de dados
const prompt = require(`prompt-sync`)();


//13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
//calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//3 x N = 3N

//Entrada
let numero;
let i = 1

//Processamento
//Saida
do{
numero = parseInt(prompt("Insira um número: "));
for(let i = 0; i <= numero; i++){
	console.log(`${numero} X ${i} = ${numero*i}`)
	
}
console.log("-------------------")
++i
}while(i <= 5)



