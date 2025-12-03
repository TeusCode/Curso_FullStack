//Nome do aluno - Nota1 - Nota2 - Média - Aprovado ou Reprovado

let nomes = ["Luan", "Pedro","Mateus"];
let notaA = [8.5,7.9,6.5];
let notaB = [7.0,5.9,9.7];

function media(n1,n2){
    return (n1 + n2)/2
}

function passou(media){
   
    if(media < 7) return "Reprovado!"
    else return "Aprovado!"

}

for (let i in nomes){

    let nota1 = notaA[i];
    let nota2 = notaB[i];

    let m = media(notaA[i],notaB[i]); //Para conseguir pegar o resultado e usar na função abaixo foi necessário armazenar o resultado da media

    console.log(nomes[i] + 
        " - " + nota1 + 
        " - " + nota2 + 
        " - " + m + 
        " - " + passou(m))

}