//Seleção de elementos:
const btnPlay = document.getElementById('play');
const btnLoop = document.getElementById('loop');
const btnVoltar = document.getElementById('retroceder');
const btnAvancar = document.getElementById('avancar');
const btnLike = document.getElementById('like');
const playBackTime = document.getElementById('playBackTime'); //Range de duração do audio
const audio = document.getElementById('audio'); //Tag (audio)

let duracaoAudio; //Duração em (s)
let onPlay = false; //Estado do btnplay
let loop = false;
let like = false;

//Configurações iniciais:
playBackTime.value = 0 //Valor padrão do playBackTime
playBackTime.step = 0.01 //Intervalo do contador

//Eventos:
btnPlay.addEventListener('click', playAudio);
btnLoop.addEventListener('click', loopAudio);
btnVoltar.addEventListener('click', voltarAudio);
btnAvancar.addEventListener('click', avancarAudio);
btnLike.addEventListener('click', likeAudio);

//Chamada de eventos:
audio.addEventListener('loadedmetadata', () => { //Quando os meta dados do audio carregam a função armazena a duração do audio:

    duracaoAudio = audio.duration
    playBackTime.max = duracaoAudio
})
//Manter sincronizado o range com o tempo da musica:
audio.addEventListener('timeupdate', () => {
    playBackTime.value = audio.currentTime;
})
//Manter atualizado a modificação do range do audio:
playBackTime.addEventListener('input', function mostrar() {
    audio.currentTime = playBackTime.value 
})

//Ações dos botões:
function playAudio() {
    if (onPlay == false) {
        audio.play();
        onPlay = true;
        btnPlay.innerHTML = '▶'
        console.log("Musica iniciada!")

    } else {
        audio.pause()
        onPlay = false;
        btnPlay.innerHTML = '❚❚'
        console.log("Musica parou!")
    }
}
function loopAudio() {
    if (loop != true) {
        audio.loop = 'true';
        loop = true;
        btnLoop.style.color = 'orange';
        console.log("A musíca está em loop!");
    } else {
        audio.loop = 'false';
        loop = false;
        btnLoop.style.color = 'white';
        console.log("A musíca não está mais em loop!")
    }
}
function voltarAudio() {
    if (audio.currentTime > 9)
        audio.currentTime -= 10
    else if (audio.currentTime > 0.1)
        audio.currentTime = 0
}
function avancarAudio() {
    if (audio.currentTime < audio.duration)
        audio.currentTime += 10
}
function likeAudio() {
    if (like != true) {
        like = true;
        btnLike.style.color = 'red'
    } else {
        like = false;
        btnLike.style.color = 'white'
    }
}