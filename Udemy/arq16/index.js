/*
Operadores de comparação
>
>=
<
<=
== *******
=== (igualdade estrita - avalia valor e tipo, é mais recomendado)
!= *******
!== (diferente estrito - avalia valor e tipo, é mais recomendado)
 */

//                num   str
const expressao = 10==='10';

console.log(expressao);

/*
Operadores lógicos
&& -> and
|| -> or
! -> not
*/

console.log(true && true);

/*
FALSY
false, 0, "", '', ´´, null, undefined, NaN
*/

console.log('Luiz' && undefined && 'Maria');

function falaOi(){
    return 'Oi';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());

console.log(0 || 'Gomes' || undefined || false || true);