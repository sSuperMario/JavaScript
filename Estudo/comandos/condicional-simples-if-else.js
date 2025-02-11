// Verificar se ele é par ou impár


var readline = require('readline-sync')
var num = readline.questionInt("Digite um numero : ")


if (num % 2 == 0){
    console.log("Este número é par")
}

else{
    console.log("Este número é impar")
}