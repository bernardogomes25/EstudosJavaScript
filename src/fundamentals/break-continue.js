const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = numeros[0];

//Continue pula para a próxima iteração
//Break finaliza o laço

console.log('Iniciando laço...')

do {
    
    if(i === 3){
        console.log('Número 3 encontrado! Pulando para o próximo.')
        i++;
        continue;
    }

    if(i === 6){
        console.log('Número 6 encontrado! Encerrando laço.')
        break;
    }

    console.log(i);
    
    i++;

} while (i < numeros.length);

console.log('Estou fora do laço.');