var readline = require('readline-sync')

var nome = readline.question("Nome : ")
var nota1 = readline.questionFloat("Nota na N1 : ")
var nota2 = readline.questionFloat("Nota na N2 : ")
var nota3 = readline.questionFloat("Nota na N3 : ")
var nota4 = readline.questionFloat("Nota na N4 : ")
var media = ((nota1)+(nota2*2)+(nota3*3)+(nota4*4)) / 10

console.log(`Nome : ${nome}`)
console.log(`Média : ${media}`)

if (media >= 6){
    console.log(`Situação : Aprovado`)
}
else if(media < 6 && media > 3){
    console.log(`Situação : Recuperação`)
}
else{
    console.log(`Situação : Reprovado`)
}