let idade = parseInt(lines.shift())

let ano = idade / 365
let re = idade % 365
let mes = re / 30
let dia = re % 30

console.log(`${parseInt(ano)} ano(s)\n${parseInt(mes)} mes(es)\n${parseInt(dia)} dia(s)`)