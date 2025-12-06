// 1.1. Lista de Tarefas	Crie um Array de Objetos chamado tarefas. Cada objeto deve ter as propriedades id (número), descricao (string) e concluida (booleano). Adicione 3 tarefas iniciais.

// 1.2. Acesso Indexado	Imprima a descricao da segunda tarefa da sua lista.

// 1.3. Adicionar Item	Use um método de Array (ex: push) para adicionar uma quarta tarefa à lista.

// 1.4. Propriedade Dinâmica	Crie uma variável chave com o valor 'descricao'. Use a notação de colchetes ([]) e essa variável para imprimir a descrição da primeira tarefa.


//1.1 Lista de tarefas
let tarefas = [
    {
        id:908342,
        descricao:"Lavar louças",
        concluida:true,
    },
    {
        id:32344,
        descricao:"Tirar o lixo",
        concluida:false,
    },
    {
        id:238734,
        descricao:"Dar banho no cachorro",
        concluida:false,
    }

];

//1.2 Imprimir segunda tarefa
console.log(tarefas[1].descricao);

//1.3 Adicionar mais uma tarefa
tarefas.push({
    id:2836187,
    descricao:"Limpar o quarto",
})
