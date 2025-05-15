let tarefas = [];
let proxId = 1;

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

addTarefa('Comprar Pão', 'Vou fazer um misto quente amanhã!');
listarTarefas();