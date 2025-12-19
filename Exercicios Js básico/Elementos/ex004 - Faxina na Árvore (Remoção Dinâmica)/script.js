let listaLivros = document.getElementById('listaLivros');
let j = 0;


//Seleciona todos os elementos da Lista de livros
//E também os elementos filhos deles

for (let i of listaLivros.children) {
    for (let j of i.children) {
        let t = j
        j.addEventListener('click', validarLista(t))
        console.log(j.checked)
    }
}

function validarLista(e) {
    if (e.checked == true) {
        e.parentElement.remove()
    }
}
