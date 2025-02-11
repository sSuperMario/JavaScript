// Só vou usar switch case caso for alguma coisa em específico ex : número, letra, nome e etc...

// **SÓ O IF E ELSE FUNCIONA** //

// if e else vai retornar

var media = 6

if (media >= 6){
    console.log(`Situação : Aprovado`)
}
else if(media >= 3){
    console.log(`Situação : Recuperação`)
}
else{
    console.log(`Situação : Reprovado`)
}

// Switch case vai retornar vazio
switch(media){
    case media >= 6:
        console.log(`Situação : Aprovado`)
        break
    case media >= 3:
        console.log(`Situação : Recuperação`)
        break
    case media < 3:
        console.log(`Situação : Recuperação`)
        break
}


// ** SWITCH CASE E IF, ELSE FUNCIONAM ** //
// Os dois irão funcionar corretamente

var sexo = "M"

if(sexo = "M"){
    console.log("Sexo masculino")
}else if(sexo == "F"){
    console.log("Sexo feminino")
}

// Porém o switch é mais prático e rápido (depende do seu gosto), isso se desenvolverá de acordo com o tempo
switch(sexo){
    case "F":
        console.log("Sexo Feminino")
    break
    case "M":
        console.log("Sexo Masculino")
    break
    default:
        console.log("Digite [F] ou [M]")
}