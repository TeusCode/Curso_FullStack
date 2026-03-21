/*This é básicamente um representante do que está como protagonista no contexto, por exemplo, se eu uso o this em uma função, o this será o elemento html que o acionou, ou seja o this depende do contexto (This em inglês significa: Isto!)*/

/*Ele aponta para "quem" está executando o código naquele momento*/

/*Exemplo:*/
let pessoa = {
    nome: "Mateus",
    olhos: "castanhos",
    altura: 1.87,
    idade: 27,
    falar: function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.falar()

/*O Objeto está chamando a função para executar, então ele se torna o this, isto, quem está fazendo executar? o objeto logo o objeto vira o this*/


/*O bind é básicamente uma forma de travar o this, para que ele não se altere*/