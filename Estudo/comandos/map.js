// Ele pega um array modifica ele através de uma função que recebe por argumento e esses valores modificados ele atribui a um novo array
/*
    Sintaxe :
    array.map(()=>{})
*/

// Possibilidade n° 1
const array = [0,1,2,3,4,5,6,7,8,9,10];
novoArray = array.map((v)=>{
    return v*9
})
console.log(array)
console.log(novoArray)

// Possibilidade n° 2
