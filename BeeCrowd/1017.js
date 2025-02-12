let horas = parseInt(lines.shift());
let velocidade_M = parseInt(lines.shift());

let resulta = (velocidade_M/ 12) * horas;

console.log(resulta.toFixed(3));
