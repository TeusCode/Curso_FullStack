/*
1.1. Perfil Simples	Crie um objeto perfil com as propriedades nome, idade e cidade. Atribua valores a elas.

1.2. Acesso com Ponto	Imprima o nome e a idade do objeto perfil usando a notação de ponto (.).

1.3. Acesso com Colchetes	Imprima a cidade do objeto perfil usando a notação de colchetes ([]). Use uma variável para armazenar o nome da propriedade ('cidade').

1.4. Adicionar Propriedade	Adicione uma nova propriedade email ao objeto perfil e atribua um valor a ela.

1.5. Atualizar Propriedade	Mude o valor da propriedade idade do objeto perfil
*/



//1.1 - Criando Objeto e atribuindo valores:
let perfil = {
    nome: "Mateus",
    idade: 22,
    cidade: "Mateus Leme",
};

//1.2 Imprimindo as propriedades com (.)
console.log(`Impresso com (.) - nome:  ${perfil.nome}`);
console.log(`Impresso com (.) - idade: ${perfil.idade}`);
console.log(`Impresso com (.) - cidade: ${perfil.cidade}`);
console.log("");

//1.3 Imprimindo as propriedades com []
let cidade = perfil["cidade"];

console.log(`Impresso com [] - nome: ${perfil["nome"]}`);
console.log(`Impresso com [] - idade: ${perfil["idade"]}`);
console.log(`Impresso com váriavel - cidade: ${cidade}`);

//1.4 Adicionando uma nova propriedade
perfil.email = "fulano@gmail.com";
perfil["contato"] = 3298278298;

//1.5 Mudando valor de uma propriedade existente
perfil.nome = "Pedro";
perfil["idade"] = 32;

console.log(perfil.idade)

