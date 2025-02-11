const readline = require("readline-sync")

let nome = readline.question("Nome : ")
let soma = 0
for(c = 1;c <= 4;c++){
    let nota = readline.questionFloat(`Nota ${c}: `)
    soma += nota
}
let media = soma / (c - 1)

/*
if (media >= 6){
    console.log(`Alunos : ${nome}\nNota : ${media}\nSituação : Aprovado`)
}else if(media >= 3){
    console.log(`Alunos : ${nome}\nNota : ${media}\nSituação : Recuperação`)
}else if(media < 3){
    console.log(`Alunos : ${nome}\nNota : ${media}\nSituação : Reprovado`)
}
*/


// Com função
function situacaoAluno(media){
    if (media >= 6){
        return `Aprovado`
    }else if(media >= 3){
        return `Recuperação`
    }else if(media < 3){
        return `Situação : Reprovado`
    }
}

let situacao = situacaoAluno(media)
console.log(`Alunos : ${nome}`)
console.log(`Nota : ${media}`)
console.log(`Situação : ${situacao}`)