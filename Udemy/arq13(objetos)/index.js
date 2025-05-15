const cidadao1 = { //Criando objeto do 0
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,

    fala(){ //Função dentro do objeto
        console.log(`A idade atual de ${this.nome} ${this.sobrenome} é ${this.idade} anos.`);
    },

    aniversario(){
        this.idade++;
        console.log(`${this.nome} ${this.sobrenome} fez aniversário! Agora ele tem ${this.idade} anos!`);
    }
};
cidadao1.fala();
cidadao1.aniversario();

function criaPessoa (nome, sobrenome, idade){ //Função que cria objeto
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Bernardo', 'Gomes', 19);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 33);
const pessoa3 = criaPessoa('João', 'Moreira', 12);
const pessoa4 = criaPessoa('Junior', 'Otávio', 63);
const pessoa5 = criaPessoa('Rafael', 'Laure', 50);

console.log(pessoa4);
