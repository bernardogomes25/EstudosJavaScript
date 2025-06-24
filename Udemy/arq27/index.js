const pessoa = {
    nome: 'Bernardo',
    sobrenome: 'Gomes'
};

const frutas = ['Banana', 'Uva', 'Morango'];

for (let chave in pessoa){
    console.log(chave);
}

for (let valor of frutas){
    console.log(valor);
}

//for clássico: geralmente com iteraveis (arrays, ou strings)
//for in: retorna o índice/chave (arrays, strings ou objetos)
//for of: retorna o valor (iteráveis, arrays ou strings)