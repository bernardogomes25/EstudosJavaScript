const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br />`;

const qtdLetras = nome.length;
document.body.innerHTML += `O seu nome tem: ${qtdLetras} letras<br />`;

const segundaLetra = nome[1];
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br />`;

const primeiraA = nome.indexOf('a');
document.body.innerHTML += `O primeiro aparecimento da letra a no seu nome ocorreu no índice: ${primeiraA} <br />`;

const ultimaA = nome.lastIndexOf('a');
document.body.innerHTML += `O último aparecimento da letra a no seu nome ocorreu no índice: ${ultimaA} <br />`;

const ultimasLetras = nome.slice(-3, nome.length)
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasLetras} <br />`;

const palavrasNome = nome.split(' ');
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome} <br />`;

const nomeUpper = nome.toUpperCase();
document.body.innerHTML += `O seu nome com letras maiúsculas: ${nomeUpper} <br />`;

const nomeLower = nome.toLowerCase();
document.body.innerHTML += `O seu nome com letras minúsculas: ${nomeLower} <br />`;