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