//Declaração array
let caixa = ['amarelo', 'verde', 'azul', 'roxo'];
console.log(caixa);

//Print no console de uma posição específica
console.log("Quarto elemento: " + caixa[3]);

//Tamanho array (length)
console.log('Tamanho array: ' + caixa.length);

//Conversão para string padrão (toString)
let toString = caixa.toString()
console.log(toString);

//Conversão para string com separador definido (join)
let join = caixa.join(' - ');
console.log(join);

//União de dois arrays (concat)
let box1 = [1,2,3];
let box2 = [4,5,6];

let fullbox = box1.concat(box2);
console.log(fullbox);

//Adição de elementos no final de um array existente (push)
caixa.push(1, 'Olá');
console.log(caixa);

//Remoção do último item do array (pop)
caixa.pop();
console.log(caixa);

//Remoção do primeiro item do array (shift)
caixa.shift();
console.log(caixa);

//Adição de itens no início do array (unshift)
caixa.unshift(200,'Tchau');
console.log(caixa);

//Remoção de elementos (splice)
caixa.splice(0,4);//Remove do 3 itens a partir do índice 0
console.log(caixa);//Se o segundo índice não for declarado, tudo a partir do primeiro será removido

//Substituição de elementos (splice)
let shop = ['Hoje', 'nós', 'vamos', 'ao', 'shopping']
shop.splice(0,3, 'Amanhã', 'não', 'iremos');
console.log(shop);

//Adição de elementos (splice)
let addsplice = [1,2,3];
addsplice.splice(3,0, 4,5,6);
console.log(addsplice);

//Cópia de uma parte do array inclusa em um novo array sem alterar o original (slice)
let ciclo = ['Início', 'Meio', 'Fim'];
let abrev = ciclo.slice(1,3);
console.log(abrev);

//Divide uma string em substrings e retorna como um array (split)
let nome = 'Gomes';
nome = nome.split();//Retorna a string como um array
console.log(nome);

let frase = 'Olá, sou o Gomes, um dev.';
frase = frase.split(',', 3);//Separa os 2 primeiros trechos usando a vírgula como base (em um array) 
console.log(frase);

let frase2 = 'Gomes';
frase2 = frase2.split('');//Separa todos os elementos da string em um array 
console.log(frase2);

//Localiza o item dentro de um array e retorna seu index, se não encontrar retorna -1 (indexOf)
let cores = ['amarelo', 'verde', 'azul', 'branco'];
console.log(cores.indexOf('azul'));

//Localiza a última aparição de um item em um array (lastIndexOf);
let cores2 = ['amarelo', 'verde', 'azul', 'branco', 'amarelo'];
console.log(cores2.lastIndexOf('amarelo'));

//Filtra um array e cria outro com os elementos resultados (filter)
let marcas = ['nike', 'adidas', 'puma', 'nike'];
let resultados = marcas.filter(marca => marca ==='nike');
console.log(resultados.length);//Quantidade de vezes que a palavra filtrada aparece

//Cria um array com valores manipulados de outro array (map)
let numeros = [10,325,5000];
let dolares = numeros.map(numero => '$' + numero);
console.log(dolares);

//Calcular um valor com base em um array (reduce)
let valores = [1,399,200,550,1000];
let soma = valores.reduce((acumulador, valor) => acumulador + valor);
console.log(soma);

//Iteração por meio de um array (forEach)
let colors = ['Amarelo', 'Lilás', 'Marrom'];
colors.forEach((item, indice) => console.log (indice, item));

//Verifica se todos os itens dentro de um array atendem a uma condição específica e retorna em boolean (every)
let numbers = [0,-30,1100,20,92134,-2];
let todosPositivos = numbers.every((valor) => {
    return valor >= 0;
})
console.log(todosPositivos);

//Verifica se pelo menos um item dentro de um array atende a uma condição específica e retorna em boolean (some)
let numerals = [1,2,3,-200,-2];
let aoMenosUmPositivo = numerals.some((valor) => {
    return valor >=0;
})
console.log(aoMenosUmPositivo);

//Verifica se um array contém um item específico e retorna em boolean (includes)
let nomes = ['gomes','mamede','jonas','joao'];
console.log(nomes.includes('jonas'));