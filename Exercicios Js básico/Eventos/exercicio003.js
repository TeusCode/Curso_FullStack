
/*
1. Alerta Simples (Evento click)
*/

//Botão que aciona um alerta na tela!

const btnAlert = document.getElementById('button1');
btnAlert.addEventListener("click", () => {
    alert("Você chamou um alerta!")
});

/* 
2. Alternância de Estilo
*/

//Texto que muda a cor do background e do mesmo

const tituloH3 = document.getElementById("h3");
const body = document.body;

tituloH3.addEventListener('click', () => {
    if (tituloH3.style.color != "red" && body.style.backgroundColor != "purple") {
        tituloH3.style.color = "red";
        body.style.backgroundColor = "purple"
    }

    else {
        body.style.backgroundColor = "white"
        tituloH3.style.color = "black";
    }
})

/*
3. Contador de Cliques (Eventos click)
*/

//Botão que realiza a contagem de quantas vezes foi acionado

const btnClique = document.getElementById("button2");
const displayContador = document.getElementById("qntCliques");
let totalCliques = 0

function clicar() {
    totalCliques++
    displayContador.innerHTML = totalCliques

}

btnClique.addEventListener('click', clicar)

/*
4. (Eventos mouseover e mouseout)
*/

//Interação com o botão

let bntInterativo = document.getElementById("button3");

function sobreBtn() {
    bntInterativo.style.backgroundColor = "rgb(54, 16, 16)"
    bntInterativo.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.384)"
    bntInterativo.innerHTML = "Mouse dentro!"
};

function foraBtn() {
    bntInterativo.style.backgroundColor = "brown"
    bntInterativo.style.boxShadow = "none"
    bntInterativo.innerHTML = "Mouse fora!"

};

function clickBtn() {
    bntInterativo.style.backgroundColor = "gray"
    bntInterativo.style.boxShadow = "none"
    bntInterativo.innerHTML = "Mouse clicou!"

};

bntInterativo.addEventListener('mouseover', sobreBtn);
bntInterativo.addEventListener('mouseout', foraBtn);
bntInterativo.addEventListener('click', clickBtn);

/*
Interação com Formulário (Evento input)
*/

let boxText = document.getElementById("boxText");
let conteudo = document.getElementById("conteudo");
let displayFont = document.getElementById("tamanhoFonte");
let tamanhoFont = 16;

//Aumenta o tamanho da fonte:
function aumentarFont() {
    if (tamanhoFont === 96) {
        return alert("A fonte está no maior tamanho possivel!")
    }

    tamanhoFont += 5
    atualizarInterface()
    digitando()
}
//Diminui o tamanho da fonte:
function diminuirFont() {
    if (tamanhoFont === 6) {
        return alert("A fonte está no menor tamanho possivel!")
    }

    tamanhoFont -= 5
    atualizarInterface()
    digitando()

}
//Mantem atualizado o tamanho da fonte:
function atualizarInterface() {
    displayFont.value = tamanhoFont
    displayFont.textContent = ` ` + tamanhoFont

}
//Mantem atualizado o texto a ser digitado
function digitando() {
    conteudo.style.fontSize = tamanhoFont + 'px'
    conteudo.textContent = boxText.value
    atualizarInterface()
}

boxText.addEventListener('input', digitando)