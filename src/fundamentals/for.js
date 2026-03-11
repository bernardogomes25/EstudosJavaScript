const frutas = ['Banana', 'Maçã', 'Uva' ];

for (let indice in frutas){ //for in -> lê os índices ou chaves do objeto
    console.log(frutas[indice]);
}

const pessoa ={
    nome: 'Janderson',
    sobrenome: 'de Souza',
    idade: 41
};

for (let elemento in pessoa){
    console.log(elemento, pessoa[elemento]);
}

/////

const pessoa2 = {
    nome: 'Bernardo',
    sobrenome: 'Gomes'
};

const frutas2 = ['Banana', 'Uva', 'Morango'];

for (let chave in pessoa2){
    console.log(chave);
}

for (let valor of frutas2){
    console.log(valor);
}

//for clássico: geralmente com iteraveis (arrays, ou strings)
//for in: retorna o índice/chave (arrays, strings ou objetos)
//for of: retorna o valor (iteráveis, arrays ou strings)