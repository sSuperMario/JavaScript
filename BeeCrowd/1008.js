let funcionary = parseInt(lines.shift());
let job = parseInt(lines.shift());
let hours = parseFloat(lines.shift());

let calc = hours * job
console.log(`NUMBER = ${funcionary}\nSALARY = U$ ${calc.toFixed(2)}`);