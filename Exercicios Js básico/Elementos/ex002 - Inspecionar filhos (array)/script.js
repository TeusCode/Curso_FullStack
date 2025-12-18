let lista = document.getElementById('listaTarefas');
let btnUrgente = document.getElementById('tarefaUrgente')

btnUrgente.addEventListener('click', tarefaUrgente)

function tarefaUrgente() {
    for (let i of lista.children) {
        if (i.textContent.includes('Urgente')) {  
            i.style.border = "2px solid orange"
            i.style.borderRadius = "5px"
        }
    }
}

//O includes verifica se dentro do texto existe a palavra dentro do seu parametro =  variavel.includes(parametro)