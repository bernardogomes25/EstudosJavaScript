function calculaMedia(array) {
    let soma = 0;
    let divisor = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
        divisor++;

    }
    let media = soma / divisor;
    return media;
}

console.log(calculaMedia([20,30]));