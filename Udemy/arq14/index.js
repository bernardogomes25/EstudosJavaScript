/*
Primitivos (imutáveis) - String, number, boolean, undefined, null

Referência (mutáveis) - Arrays, Objects, Functions
*/

let a = [1,2,3,4,5];
let b = a;
console.log(a,b);

a.push(6);
console.log(a,b);

b.pop();
console.log(a,b);