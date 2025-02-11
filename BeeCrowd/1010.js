// O ".shift()" vai pegar os valores de um array um por um | O ".split(" ")" vai separar cada um por espaços
// [12,1,5.30]
let totalValores1 = lines.shift().split(" ") // ["12","1","5.30"]
let totalValores2 = lines.shift().split(" ") // ["16","2","5.10"]

let codpeca1 = totalValores1.shift()
let numpecas1 = totalValores1.shift()
let valorunit1 = totalValores1.shift()
let calc = numpecas1 * valorunit1

let codpeca2 = totalValores2.shift()
let numpecas2 = totalValores2.shift()
let valorunit2 = totalValores2.shift()
let calc2 = numpecas2*valorunit2

let result = calc + calc2
console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`)