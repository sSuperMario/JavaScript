/*
let c = 1;
do {
    console.log(c);
    c++;
}while(c <= 10);
*/
var readline = require('readline-sync');
let nome = readline.question("Nome: ");

let c = 1;
let soma = 0;
do{
    let nota = readline.questionFloat(`Nota ${c}:`);
    soma += nota;
    while(nota < 0 || nota > 10){
        nota = readline.questionFloat(`Nota inválida, Nota ${c} : `);
    }
    c++
}while(c <= 4);

let resultado = soma / 4;
console.log(`Nome : ${nome}\nNota : ${resultado.toFixed(2)}`);