/*🎯 Desafio Integrado: Gerenciamento de Perfil e Inventário de Dev
O objetivo é criar uma estrutura de dados robusta e funções que manipulem o perfil e os recursos de um desenvolvedor.

Estrutura de Dados Base
Você deve começar declarando as duas estruturas principais (Objeto e Array):

Crie um Objeto devProfile (seu Perfil Simples, 1.1) que contenha:

nome, idade, e a propriedade aninhada localizacao (seu Endereço Completo, 3.1).

Crie um Array de Objetos cursosCompletos (sua Lista de Livros, 3.4). Cada objeto deve ter titulo e categoria (ex: 'Frontend', 'Backend').

Parte 1: Manipulação e Métodos (Ações no Objeto)
Ajuste de Dados:

Adicione a propriedade contatoEmail ao devProfile (1.4).

Atualize a idade do devProfile (1.5).

Lista de Habilidades: Adicione uma propriedade hardSkills (seu Array de Habilidades, 2.1) ao devProfile.

Método de Apresentação: Adicione um método (saudacao) ao devProfile (2.3). Ele deve usar this para retornar a string: "Olá, sou [nome], tenho [idade] anos e moro em [localizacao.cidade]."

Parte 2: Acessos e Verificação (Testando as Chaves)
Acessos Básicos: Imprima o nome e a idade usando a notação de ponto (1.2).

Acesso Dinâmico: Use uma variável chaveLocal com o valor 'localizacao' para imprimir o objeto de localização (1.3).

Acesso Aninhado: Imprima apenas a rua dentro da propriedade localizacao usando a notação de ponto (3.2).

Acesso de Array: Imprima a segunda habilidade da lista hardSkills (2.2).

Parte 3: Iteração e Lógica (Processamento de Dados)
Iteração de Objeto: Use um for...in loop para percorrer e imprimir todas as chaves e valores do objeto devProfile (apenas no primeiro nível) (3.3).

Iteração de Array: Use um forEach para percorrer o array cursosCompletos (3.5) e imprima a seguinte string para cada item: "Título: [titulo] | Categoria: [categoria]".

Desafio Bônus (Lógica Condicional): Crie uma função chamada checarSenioridade(perfil) que recebe o objeto devProfile e usa uma condicional (ex: if/else) para retornar:

"Sênior" se a idade for maior que 30 E o número de habilidades for maior que 5.

"Júnior/Pleno" caso contrário.
*/

//Estrutura de Dados Base
let devProfile = { 
    nome: "Mateus",
    idade: 22,

    localizacao: {
        pais: "Brasil",
        cidade: "São Paulo",
        bairro: "bairro tal...",
        endereço: "Rua tal tal...",
        numero: "4534 A",
    },

        listaLivros:[
            {
                titulo:"O Homen de giz",
                categoria:"Terror",
            },

            {
                titulo:"As outras pessoas",
                categoria:"Terror",
            },

            {
                titulo:"A droga da obediência",
                categoria:"Suspense",
            }
        ],

        cursosCompletos:[
            {
                titulo:"Técnico em fundição",
                categoria:"Técnico",
            },

            {
                titulo:"Aprendizagem em EletroMecânica",
                categoria:"Técnico",
            },

            {
                titulo:"Engenharia da Computação",
                categoria:"Superior",
            },

        ],

        apresentarSe: function ()
            {return `Olá meu nome é ${this.nome}, tenho ${this.idade} e moro em ${this.localizacao.cidade}`},

    }

//Parte 1: Manipulação e Métodos (Ações no Objeto)
//Ajuste de Dados:

devProfile.contatoEmail = "mateus@gmail.com";
devProfile.idade = 23;

devProfile.hardSkills = ["Excel", "Power Point", "World"];

console.log(devProfile.apresentarSe())

