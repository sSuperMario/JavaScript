function olaMundo(){
    console.log("Olá mundo!"); // Retornará void
};

function olaMundo2(){
    return "Olá Mundo!!" // Retornará String
}
olaMundo() // Chamar a função
let ola = olaMundo2()

console.log(ola)


// Ex¹:
function soma(A, B){
    return A + B
}
let resultado = soma(8, 9)
console.log(resultado)

function soma2(n1, n2){
    console.log(n1 + n2)
}
soma2(8,10)