/*
2.1. Lista de Habilidades	Adicione uma propriedade habilidades ao seu objeto perfil. O valor deve ser um Array com pelo menos 3 strings (ex: 'HTML', 'CSS', 'JavaScript').

2.2. Acesso a Item de Array	Acesse e imprima a segunda habilidade da lista.

2.3. Adicionar Método Simples	Adicione um método (apresentacao) ao objeto perfil. A função deve retornar uma string simples dizendo: "Olá, meu nome é [nome] e tenho [idade] anos." (Use this).

2.4. Executar Método	Chame o método apresentacao e imprima o resultado no console.
*/

//2.1 Lista de habilidades:
let perfil = {
    nome: "Mateus",
    idade: 22,

    habilidades: ["Css", "Html", "JavaScript"],
};

//2.2 Imprimindo 2° habilidade
console.log(`Minha segunda habilidade é ${perfil.habilidades[1]}`)

//2.3 Adicionando método apresentar
let apresentarSe = function () { return console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`) };

perfil.apresentar = apresentarSe

//2.4 Chamando o método
perfil.apresentar()