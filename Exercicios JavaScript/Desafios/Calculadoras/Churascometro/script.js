const inputAdultos = document.getElementById('adultos');
const inputCriancas = document.getElementById('criancas');
const inputDuracao = document.getElementById('duracao');
const display = document.getElementById('resultado');

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);

function calcular() {
    display.innerHTML = ''
    if (inputAdultos.value.length != 0 && inputCriancas.value.length != 0 && inputDuracao.value.length != 0) {
        let adultos = Number(inputAdultos.value);
        let criancas = Number(inputCriancas.value);
        let duracao = Number(inputDuracao.value);

        let carne = calcularCarne(adultos, criancas, duracao);
        let cerveja = calcularCerveja(adultos, duracao);
        let bebida = calcularBebida(adultos, criancas, duracao);

        exibirDisplay(carne, cerveja, bebida)
    }
    else {
        alert("Preencha todos os campos, corretamente!")
        display.innerHTML = ''
    }

}

function calcularCarne(adultos, criancas, duracao) {

    let carne;

    if (duracao < 6)
        carne = adultos * 400 + (criancas * 200)

    else
        carne = adultos * 650 + (criancas * 325)

    return carne
}

function calcularCerveja(adultos, duracao) {
    let cerveja;

    if (duracao < 6)
        cerveja = adultos * 1200
    else
        cerveja = adultos * 2000

    return cerveja

}

function calcularBebida(adultos, criancas, duracao) {
    let bebida;

    if (duracao < 6)
        bebida = adultos * 1000 + (criancas * 500)
    else
        bebida = adultos * 1500 + (criancas * 750)

    return bebida
}

function exibirDisplay(carne, cerveja, bebida) {
    display.innerHTML = `<p>${(carne / 1000).toFixed(1)} Kg de Carne</p>`
    display.innerHTML += `<p>${Math.ceil(cerveja / 355)} Latas de Cerveja</p>`
    display.innerHTML += `<p>${Math.ceil(bebida / 2000)} Garrafas(2l) de Bebida </p>`
}