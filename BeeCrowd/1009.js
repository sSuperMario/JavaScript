var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let name = lines.shift()
let salary = parseFloat(lines.shift())
let sales = parseFloat(lines.shift())

let calc = ((15/100) * sales)+salary;
console.log(`TOTAL = R$ ${calc.toFixed(2)}`);
