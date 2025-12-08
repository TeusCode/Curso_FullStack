// 3.1. Objeto de Preços	Crie um objeto chamado produtos com duas propriedades: leite e pao. Atribua valores numéricos (preços) a eles.

// 3.2. Função de Soma	Crie uma função chamada calculaTotal(item1, item2) que recebe os nomes dos produtos como argumentos (strings) e retorna a soma dos preços usando o objeto produtos.

// 3.3. Execução	Chame a função calculaTotal('leite', 'pao') e imprima o resultado.

// 3.4. Função com Condicional	Modifique a função calculaTotal. Ela deve primeiro verificar se os preços de ambos os itens existem no objeto produtos. Se algum preço não for encontrado, a função deve retornar a string "Erro: Item não cadastrado."

//3.1 Objeto de Preços
let produtos =
    {
        leite: 6.8,
        pao: 0.9,
    }

//3.2 Função de Soma
function calculaTotal(item1, item2) {
    return produtos[item1] + produtos[item2] //Não funciona o acesso com ponto (.)
}

//3.3 Execução
console.log(calculaTotal('leite', 'pao')) //Precisam ser mencionados como string

//3.4 Função com Condicional
function calculaTotalMod(item1, item2) {
    if (typeof produtos[item1] === 'number' && typeof produtos[item2] === 'number')//typeof verifica se as propriedades do objeto são do tipo number e podem ser somados
        return produtos[item1] + produtos[item2] //Não funciona o acesso com ponto (.)
    else return "ERRO: Item não cadastrado!"
}

console.log(calculaTotalMod('leite', 'pao'))