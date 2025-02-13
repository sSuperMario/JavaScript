let n = parseInt(lines.shift())
let calcH = n/3600
let m = n%3600
let calcM = m/60
let calcS = m%60

console.log(`${parseInt(calcH)}:${parseInt(calcM)}:${parseInt(calcS)}`)