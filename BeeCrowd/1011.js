var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = parseFloat(lines.shift());
let calc = (4.0/3)*3.14159*(r**3);
console.log("VOLUME = "+ calc.toFixed(3));