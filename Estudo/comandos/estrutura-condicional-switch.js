var readline = require("readline-sync")

// PRIMEIRO EXEMPLO 
var sexo = readline.question("Informe seu Sexo :\n[M] Masculino\n[F]Feminino\n")

var sexoM = sexo.toUpperCase() // Converter para Maiúsculo

switch(sexoM){
    case "F":
        console.log("Sexo Feminino")
    break
    case "M":
        console.log("Sexo Masculino")
    break
    default:
        console.log("Digite [F] ou [M]")
}

// SEGUNDO EXEMPLO

console.log("Lanchonete:")
var pedido = readline.questionInt("10 - Xtudo \n11 - Bomba\n12 - Dog na chapa\n13 - Refrigerante\n")

switch(pedido){
    case 10:
        console.log("Lanche escolhido: Xtudo")
        break
    case 11:
        console.log("Lanche escolhido: Bomba")
        break
    case 12:
        console.log("Lanche escolhido: Dog na chapa")
        break
    case 13:
        console.log("Lanche escolhido: Refrigerante")
        break
    default:
        console.log("Pedido incorreto")
}