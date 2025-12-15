/* ### 1. Seleção e Modificação de Conteúdo (Foco: Acesso)

**Objetivo:** Praticar a seleção de um único elemento no HTML e alterar seu conteúdo básico.

| Conceitos a Usar | Tarefas |
| :--- | :--- |
| `document.getElementById()` | 1. Crie um elemento <h1> com um ID específico. |
| `textContent` (ou `innerText`) | 2. Usando o ID, selecione o <h1> e mude o texto para uma saudação personalizada. |
| `document.querySelector()` | 3. Crie um parágrafo <p> com a classe "introducao". |
| `style` | 4. Usando o seletor de classe, selecione o <p> e mude a cor de fundo dele para uma cor de sua escolha. | */


let t = document.getElementById('titulo');

t.innerHTML = "Olá Mundo!"

let p = document.querySelector(".introducao");

p.style.backgroundColor = "red";    
p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente placeat tenetur alias harum officia quae voluptatibus asperiores atque. At consequatur, labore soluta quia consequuntur tempore cupiditate consectetur repellat cumque. Natus!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente placeat tenetur alias harum officia quae voluptatibus asperiores atque. At consequatur, labore soluta quia consequuntur tempore cupiditate consectetur repellat cumque. Natus! "