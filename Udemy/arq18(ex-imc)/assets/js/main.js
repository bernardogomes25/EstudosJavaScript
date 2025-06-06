const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        calcResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        calcResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}, (${nivelImc})`;

    calcResultado(msg, true);

});

function getNivelImc(imc) {
    const nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) {
        return nivelImc[0];
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return nivelImc[1];
    }
    if (imc >= 25 && imc <= 29.9) {
        return nivelImc[2];
    }
    if (imc >= 30 && imc <= 34.9) {
        return nivelImc[3];
    }
    if (imc >= 35 && imc <= 39.9) {
        return nivelImc[4];
    }
    if (imc >= 40) {
        return nivelImc[5];
    }
}

function getImc(peso, altura) {
    const resultado = peso / altura ** 2;
    return resultado.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function calcResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';


    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');

    }
    p.innerHTML = (msg);
    resultado.appendChild(p);
}
