// let[A,B,C] = input.split(" ").map(item => parseFloat(item))
// item => parseFloat(item) vai transformar a string dos arrays em ponto flutuante


let[A,B,C] = input.split(" ").map(item => parseFloat(item))
let pi = 3.14159

let areaTriangulo = (A * C) / 2
let areaCirculo = pi * (C**2)
let areaTrapezio = ((A+B)/2)*C
let areaQuadrado = B**2
let areaRetangulo = A * B

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`)