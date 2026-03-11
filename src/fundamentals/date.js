function formatDate(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil);

////////
console.log('------------------------');

const data1 = new Date(2005, 7, 25); //ano, mês-1, dia, hora, minuto, segundo, milisegundo
console.log(data1.toString());

const dataDois = new Date('2019-04-20 20:15:59.333'); //'ano-mês-dia hora:minuto:segundo'
console.log(dataDois.toString());
console.log('Dia', dataDois.getDate());
console.log('Mês', dataDois.getMonth() + 1); //Mês começa do 0
console.log('Ano', dataDois.getFullYear());
console.log('Hora', dataDois.getHours());
console.log('Min', dataDois.getMinutes());
console.log('Seg', dataDois.getSeconds());
console.log('Ms', dataDois.getMilliseconds());
console.log('Dia semana', dataDois.getDay()); //0 - Domingo, 6 - Sábado


console.log(Date.now());