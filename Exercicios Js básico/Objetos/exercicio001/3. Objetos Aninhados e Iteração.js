/*
3.1. Endereço Completo	Substitua a propriedade cidade por uma propriedade endereco, que deve ser um Objeto Aninhado com rua, numero e cep.

3.2. Acesso Aninhado	Acesse e imprima apenas a rua do objeto perfil usando a notação de ponto.
3.3. Iteração Simples	Use um for...in loop para percorrer todas as chaves e valores do objeto perfil (apenas no primeiro nível) e imprima cada par no console.

3.4. Lista de Livros	Crie um Array de Objetos chamado livros. Cada objeto deve ter titulo e autor. Adicione 3 livros.

3.5. Iteração de Array	Use um for loop ou forEach para percorrer o array livros e imprima apenas o titulo de cada livro.
*/

let perfil = {
    nome: "Mateus",
    idade: 21,

    cidade: "Mateus Leme",
}

//3.1 Substituindo cidade por Endereço
delete perfil.cidade // Removendo propriedade

perfil.endereco = {
    cidade: "Mateus Leme",
    bairro: "Bairro Joaquim tal",
    rua: "Rua Iolanda tal2",
    numero: 234,
};

//3.2 Imprimindo a rua
console.log(perfil.endereco.rua);

//3.3 Varrendo array e imprimindo
for (let chave in perfil) {
    console.log(chave)
    console.log(perfil[chave])

}

//3.4 Criando lista de livros
perfil.livros = [
    {
        titulo: "Droga da obediência",
        autor: "Pedro Bandeira",
    },

    {
        titulo: "Homem de giz",
        autor: "C.J.Tudor",
    },

    {
        titulo: "As outras pessoas",
        autor: "C.J.Tudor",
    },
    {
        titulo: "O que aconteceu com anne",
        autor: "C.J.Tudor"
    },
    {
        titulo: "O nevoeiro",
        autor: "Stephen King",
    },
];

console.log("");

//3.4 Imprimindo o titulo de cada livro
for (let i of perfil.livros) {
    console.log(i.titulo)
};
