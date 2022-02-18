//jogo de ping pong
var iniciar ;
var bola;
var cpu;
var player;
var painel_pontos;
//animation control
var game, frame;
game = false;
//posição
var bolax, bolay;
var posplayerx,posplayery,poscpux,poscpuy;
//direção
var dirJy;

//posições iniciais
var posinitialy  =180,posinitialcpuy = 180,posinitialbolax = 475, posinitialbolay = 240;

//tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

//direção
var dirbolax, dirbolay;
var dircpuY = 0;
var velbola, velcpu, velplayer;

//controle
var pontos = 0;
var tecla;

//inicializador

function inicializar () {
    velbola = velcpu = velplayer = 8;
    iniciar = window.document.querySelector('#btIniciar');
    iniciar.addEventListener('click',primeiro_passo);
    player = window.document.querySelector('#dvJogador');
    cpu = window.document.querySelector('#dvCpu');
    bola  = window.document.querySelector('#dvBola');
    painel_pontos = window.document.querySelector('#txtPontos');
    document.addEventListener('keydown',down);
    document.addEventListener('keyup',up);

}
window.addEventListener('load',inicializar);
//start

function primeiro_passo () {
    if (!game) {
        game  = true
        cancelAnimationFrame(frame);
        dirJy = 0;
        bolax = posinitialbolax;
        bolay = posinitialbolay;
        posplayery = 0;
        poscpuy = posinitialcpuy;
        controle_animation();
    }
}

//controle da animação

function controle_animation () {
    if (game) {
        control_game();
    }
    frame = requestAnimationFrame(controle_animation);
}

function control_game () {
    if (game) {
        posplayery += velplayer * dirJy;
        player.style.top= `${posplayery}px`;
    }
}
//controles keydown/keyup
function down () {
    tecla = event.keyCode;
    if (tecla === 38) {
        //para cima
        dirJy = -1;
    }else if (tecla === 40) {
        //para baixo
        dirJy = 1;
    }
}

function up () {
    tecla = event.keyCode;
    if (tecla === 38) {
        //para cima
        dirJy = 0;
    }else if (tecla === 40) {
        //para baixo
        dirJy = 0;
    }
}