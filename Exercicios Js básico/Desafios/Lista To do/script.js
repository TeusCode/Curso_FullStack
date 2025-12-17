/*📝 Resumo do Exercício: To-Do List Simples
O objetivo é construir uma página funcional de lista de tarefas em duas partes principais:

1. Estrutura e Estilo (HTML & CSS)
HTML: Crie um campo de entrada (<input>) e um botão para adicionar tarefas, além de uma lista vazia (<ul>).


CSS: Use o Flexbox para garantir que a área principal da lista de tarefas fique bem centralizada na tela, reforçando seu uso dessa tecnologia.

2. Lógica e Interação (JavaScript)
Adicionar Tarefa: Ao clicar no botão, o JavaScript deve capturar o texto do input e criar dinamicamente um novo item (<li>) na lista (<ul>). É fundamental incluir uma checagem lógica: evitar adicionar tarefas vazias.



Marcar como Concluída: Implemente um evento de clique em cada item da lista (tarefa). Ao clicar em uma tarefa, o JavaScript deve usar classes CSS para alternar (toggle) o estilo, aplicando um risco (como line-through) para indicar que a tarefa foi concluída.


Este exercício garantirá que você pratique a separação de responsabilidades e a manipulação progressiva do DOM, dois pilares do bom código que você busca.


Qualquer passo que travar, é só pedir ajuda! */

let inputTarefa = document.getElementById('inputTarefa');
let listaTarefas = document.getElementById('listaTarefas');


function addTarefa() {
    if (inputTarefa.value == "")
        return alert("Adicione uma tarefa!")

    listaTarefas.innerHTML += `<li onclick="red(this)"> <input type="checkbox"> ${inputTarefa.value} </li>`
    console.log(`A tarefa: ${inputTarefa.value} foi adicionada!`)
}

function red(elemento) {
    elemento.strike();
}