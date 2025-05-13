const nome = 'Bernardo Gomes';
const sobrenome = 'Pereira';
const altura = 1.85;
let idade = 19;
let peso = 85;

let imc = peso/(altura*altura);
let anoNascimento = 2025 - idade;
console.log(`${nome} ${sobrenome} tem ${altura}m de altura, pesa ${peso}kg e tem ${idade} anos!`);
console.log(`Além disso, seu IMC é ${imc} e ele nasceu em ${anoNascimento}.`);