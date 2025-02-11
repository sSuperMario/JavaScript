// Math.sqrt() <- para raizes

//let x = input.split(" ").map(item => parseFloat(item));
//let y = input.split(" ").map(item => parseFloat(item));
let x = [-2.5 ,0.4]
let y = [-12.2,7.3]

let calc = Math.sqrt(Math.pow((y[0] - x[0]),2) + Math.pow((y[1] - x[1]),2))
console.log(calc.toFixed(4))