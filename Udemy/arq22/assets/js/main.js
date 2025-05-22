const dataTxt = document.querySelector('.data');

let data = new Date();
let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let anoInteiro = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const p = document.createElement('p');
p.innerHTML += dataFormatter(data);
dataTxt.appendChild(p);

function dataFormatter(data) {

    const diaSemana = semana[data.getDay()];
    const dia = zeroEsquerda(data.getDate());
    const mes = anoInteiro[data.getMonth()];
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());

    return `${diaSemana}, ${dia} de ${mes} de ${ano}, ${hora}:${min}`;
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}