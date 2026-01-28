const data = new Date(2005, 7, 25); //ano, mês-1, dia, hora, minuto, segundo, milisegundo
console.log(data.toString());

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