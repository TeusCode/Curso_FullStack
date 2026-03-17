/*Normalmente, quando declaramos uma variável fora de um escopo (Função), ela se torna uma variável global, porém também é possivel usar uma variável dentro de uma função sem declarar, ela é declarada de forma automática pelo JavaScript de forma global se mencionada dentro de uma função*/

function saudacao() {
    saudacao = "Ola"
    console.log("Olá")
};
saudacao()

/*A variável saudação agora existe de forma global, mesmo sem nunca ter sido declarada!*/
/*Esse comportamento também funciona se você mensiona-la fora da função*/

saudacao = "Ola";
/*A variável saudação agora existe de forma global, mesmo sem nunca ter sido declarada!*/

/*Porém Existe uma forma de desativar esse comportamento padrão, através do "use strict" só adiciona-lo no inicio do código e todas as variáveis apartir dele terão que ser declaradas*/


"use strict"

function teste(){
    test = "Testando"
}

console.log(test)