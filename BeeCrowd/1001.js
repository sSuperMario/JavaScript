var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(10)
var B = parseInt(4)
var X = A + B
console.log(`X = ${X}`)