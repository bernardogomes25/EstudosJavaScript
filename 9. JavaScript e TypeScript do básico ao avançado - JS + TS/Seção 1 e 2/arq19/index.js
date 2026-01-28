/*
Operadores Ternários:

(Condição) ? (Valor para verdadeiro) : (Valor para falso);

*/

const pontosUser = 1000;

const nivelUser = pontosUser>=1000 ? 'Usuário Vip' : 'Usuário Normal';

const corUser = null;
const corPadrao = corUser || 'Azul';

console.log(nivelUser + ',', corPadrao);