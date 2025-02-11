var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let raio = parseFloat(lines.shift());
let n = 3.14159;
let area = n * (raio**2);

console.log("A="+area.toFixed(4)); // .toFixed : ele vai determinar quantas casas decimais vai aparecer após a vírgula