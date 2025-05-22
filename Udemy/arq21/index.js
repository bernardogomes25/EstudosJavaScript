const data = new Date();
const diaSemana = data.getDay();

function getWeekDay(diaSemana) {
    let stringWeekDay;
    switch (diaSemana) {
        case 0:
            stringWeekDay = 'Domingo';
            break;
        case 1:
            stringWeekDay = 'Segunda';
            break;
        case 2:
            stringWeekDay = 'Terça';
            break;
        case 3:
            stringWeekDay = 'Quarta';
            break;
        case 4:
            stringWeekDay = 'Quinta';
            break;
        case 5:
            stringWeekDay = 'Sexta';
            break;
        case 6:
            stringWeekDay = 'Sábado';
            break;
        default:
            stringWeekDay = 'Inválido';
            break;
    }
    return stringWeekDay;
}

const diaSemanaTxt = getWeekDay(diaSemana);
console.log(diaSemana, diaSemanaTxt);