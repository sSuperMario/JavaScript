var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift())
let Y = parseFloat(lines.shift())
let calc = X / Y
console.log(calc.toFixed(3)+" km/l")