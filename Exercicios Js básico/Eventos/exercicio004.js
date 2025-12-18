/*
1. A Estrutura (Mentalize o HTML)
Você precisará de três elementos principais:
*/

let contador = 0;

let display = document.getElementById('displayContador');
let btnAumentar = document.getElementById('aumentar');
let btnDiminuir = document.getElementById('subtrair');


display.textContent = contador

function somar() {
    contador++
    display.textContent = contador
    if (contador >= 10) display.style.color = "red"
}

function subtrair() {

    if (contador > 0) {
        contador--
        display.textContent = contador
        if (contador < 10) display.style.color = "black"
    } else { alert("Valor minímo!") }
}

btnAumentar.addEventListener("click", somar);
btnDiminuir.addEventListener("click", subtrair);



