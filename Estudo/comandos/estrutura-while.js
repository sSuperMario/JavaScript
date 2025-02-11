// Ex¹ : Contador

/*var c = 1

while(c <= 10){
    console.log(c)
    c++
    // ou c = c + 1
}*/

//Ex² : Media
var readline = require('readline-sync')

var c = 1
var nome = readline.question("Nome: ")
var soma = 0 
while(c <= 4){
    var nota = readline.questionFloat(`Nota ${c}:`)
    while(nota < 0 || nota > 10){
        nota = readline.questionFloat("a nota deve ser ente 0 e 10 : ")
    }
    c++
    soma += nota //ou soma = soma + nota
}

var media = soma / 4

console.log(`O aluno ${nome} teve media ${media}`)