const { parseArgs } = require('util');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

parseFloat(lines.shift()) // Para números flutuantes
parseInt(lines.shift()) // Para números inteiros
lines.shift() // Para strings
