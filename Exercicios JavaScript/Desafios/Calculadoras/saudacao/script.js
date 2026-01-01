//Código que te diz a saudação correta, de acordo com o horário.

//Maquina de fazer horário:
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()



if (hora < 12 && hora >= 6) {
    alert("Bom dia!")
} else
    if (hora >= 12 && hora < 18) {
        alert("Boa tarde!")
    } else
        if (hora >= 18 && hora < 24) {
            alert("Boa noite!")
        } else {
            alert("Boa madrugada!")
        }


    alert(`Hoje é dia: ${dia}/${mes}/${ano}`)
    alert(`E são exatamente ${hora}:${minutos}`)
