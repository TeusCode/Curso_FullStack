/*### 2. Interação Básica com Eventos (Foco: `click` e `Window`)

**Objetivo:** Conectar um botão a uma ação simples e usar o objeto global `window`.

| Conceitos a Usar | Tarefas |
| :--- | :--- |
| `addEventListener()` | 1. Crie um botão no HTML. |
| Evento `click` | 2. Adicione um ouvinte de evento ao botão para que ele execute uma função quando for clicado. |
| `window.alert()` | 3. Dentro da função, faça o objeto `window` exibir uma mensagem de alerta para o usuário. |
| `document.body` | 4. Use o JavaScript para mudar a cor de fundo do elemento <body> (corpo da página) a cada clique. |*/

let button = document.getElementById('button');
let body = document.body

button.addEventListener("click", alerta);

function alerta() {
    alert("Você disparou um alerta!")

    if (body.style.backgroundColor != 'red') {
        body.style.backgroundColor = 'red'
    } else
        body.style.backgroundColor = 'blue'
    
        ;

}


