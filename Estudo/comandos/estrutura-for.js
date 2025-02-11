let readline = require('readline-sync')

/*
for (let c = 1; c <= 10; c++) {
    console.log(c)
}
*/

// Ex¹: tabuada
let num = readline.questionInt("Número : ")
for(let c = 1; c <= 10; c++){
    let tabuada = num * c;
    console.log(`${num} x ${c} = ${tabuada}`);
}

// Ex²: senha
let senhac = 123456789
for(let c = 1; c <=3; c++){
    let senha = readline.questionInt("Insira sua senha : ")
    if(senha === senhac){
        console.log("Logando...")
        break // vai fazer o loop parar
    }else if (senha != senhac && c == 3){
        console.log("Usuário bloqueado")
    }else{
        console.log("Senha incorreta")
    }
}
