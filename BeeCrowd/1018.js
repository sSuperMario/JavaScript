let n = parseInt(lines.shift())

if (0 < n && n < 1000000){
    let quantas100 = n / 100
    nnovo = n%100

    let quantas50 = nnovo / 50
    nnovo = nnovo % 50

    let quantas20 = nnovo / 20
    nnovo = nnovo % 20

    let quantas10 = nnovo / 10
    nnovo = nnovo % 10

    let quantas5 = nnovo / 5
    nnovo = nnovo % 5

    let quantas2 = nnovo / 2
    nnovo = nnovo % 2

    console.log(n);
    console.log(`${parseInt(quantas100)} nota(s) de R$ 100,00`);
    console.log(`${parseInt(quantas50)} nota(s) de R$ 50,00`);
    console.log(`${parseInt(quantas20)} nota(s) de R$ 20,00`);
    console.log(`${parseInt(quantas10)} nota(s) de R$ 10,00`);
    console.log(`${parseInt(quantas5)} nota(s) de R$ 5,00`);
    console.log(`${parseInt(quantas2)} nota(s) de R$ 2,00`)
    console.log(`${parseInt(nnovo)} nota(s) de R$ 1,00`);
}
else{
    console.log("error")
}