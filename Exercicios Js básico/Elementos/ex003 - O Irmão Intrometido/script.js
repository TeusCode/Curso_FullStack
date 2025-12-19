let msgErro = document.getElementsByTagName('span');


function desfoque(e){
    let d = e.nextElementSibling
    d.textContent = "Preencha esse campo!"
    d.style.color = "red"
} 


