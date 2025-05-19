/*
addTarefa("Estudar JS", "Praticar arrays e objetos");
addTarefa("Ler livro", "Capítulo 3 do livro de algoritmos");

listarTarefas();

marcarComoConcluida(1);

filtrarPorStatus("concluída");

removerTarefa(2);

listarTarefas();

*/

let tarefas = [];
let proxId=0;

function addTarefa (titulo, desc){
    const novaTarefa = {
        id: proxId++,
        titulo, 
        desc, 
        status: 'pendente',
        dataCriacao: new Date().toLocaleDateString('pt-BR')
    };
    tarefas.push(novaTarefa);
}

function listarTarefas(){
    if (tarefas.length===0){
        return;
    }
    console.log(tarefas)
}

addTarefa("Estudar JS", "Praticar arrays e objetos");
addTarefa("Ler livro", "Capítulo 3 do livro de algoritmos");

listarTarefas();
