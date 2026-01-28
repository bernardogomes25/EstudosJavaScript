function soma(x=0, y=0){ //função básica
    return x+y;
}

console.log(soma(3,2));

const raiz = function (n) { //função atribuída a variável
    return n**0.5;
};

console.log(raiz(9));

const subtrai = (x=0,y=0) => x-y; //arrow function (simplificado, mas funciona de mesma forma)

console.log(subtrai(200,27));