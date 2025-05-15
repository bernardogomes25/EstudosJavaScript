let alunos = ['Bernardo', 'João', 'Gabriel'];

console.log(typeof(alunos));

alunos.push('Jonas', 'Felipe');
console.log(alunos);

alunos.unshift('BG');
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);

delete alunos[1];
console.log(alunos);

//Outras manipulações estão na pasta: ManipularArray