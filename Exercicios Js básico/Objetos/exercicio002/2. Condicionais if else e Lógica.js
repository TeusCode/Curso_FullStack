// 2.1. Checagem Simples	Escreva um if para verificar se a terceira tarefa da lista está marcada como concluida. Se estiver, imprima: "Tarefa concluída!". Caso contrário, imprima: "Tarefa pendente."

// 2.2. Função de Status	Crie uma função chamada verificaStatus(tarefa). Ela deve receber um objeto tarefa como argumento e retornar a string "Concluída" ou "Pendente".

// 2.3. Aplicar Status	Chame a função verificaStatus passando o objeto da primeira tarefa e imprima o resultado.

// 2.4. Condicional Combinada	Escreva um if que verifique se a primeira tarefa está não concluída (!concluida) E o seu id é maior que 0.

let tarefas = [
    {
        id: 908342,
        descricao: "Lavar louças",
        concluida: true,
    },
    {
        id: 32344,
        descricao: "Tirar o lixo",
        concluida: false,
    },
    {
        id: 238734,
        descricao: "Dar banho no cachorro",
        concluida: false,
    }

];


//2.1 Checagem simples
if (tarefas[2]['concluida'] === true) // ou if(tarefas[2].concluida === true)
    console.log("Tarefa Concluida!")

else
    console.log("Tarefa pendente!")


//2.3 Função status
function verificarStatus(status, n) {
    let booleano = status[n].concluida;
    switch (booleano) {
        case true:
            console.log("Concluida!")
            break;

        case false:
            console.log("Pendente!");
            break;
    }
}

verificarStatus(tarefas, 0)

//2.4 Condicional Combinada
let statusTarefa = tarefas[0]['concluida'];
let idTarefa = tarefas[0]['id'];

if (statusTarefa != true && idTarefa < 0) {
    console.log("Esta tarefa não existe!")
} else { console.log(`A tarefa foi concluída e seu id é ${idTarefa}`) }
