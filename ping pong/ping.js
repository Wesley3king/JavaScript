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
var bolaIX, bolaIY;
//direção
var dirJy;

//posições iniciais
var posinitialy  =180,posinitialcpuy = 180,posinitialbolax = 475, posinitialbolay = 240;
            var posjoginiY = 180;
            var posjoginiX = 0;
            var poscpuiniX = 930; 
            var poscpuiniY = 180;
            var posbolainiY = 240;
            var posbolainiX = 475;
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
        dirbolay = 0;
        if ((Math.random()*10)< 5) {
            dirbolax = -1;
        }else{
            dirbolax = 1;
        }
        bolax = posbolainiX;
        bolay = posbolainiY;
        posplayery = posjoginiY;
        posplayerx = posjoginiX
        poscpuy = posinitialcpuy;
        poscpux = poscpuiniX;
        controle_animation();
    }
}

//controle da animação

function controle_animation () {
    if (game) {
        control_player();
        controle_bola();
    }
    frame = requestAnimationFrame(controle_animation);
}

function control_player () {
    
    if (game) {
        if ((posplayery+barraH) >= campoH || posplayery <= campoH ){
            posplayery+= (velplayer * dirJy) * (-1);
        }
        posplayery += velplayer * dirJy;
        //console.log(`${posplayery} // ${soma}`);
        player.style.top= `${posplayery}px`;
    }
}
//controle da bola
function controle_bola () {
    bolax += velbola*dirbolax;
    bolay += velbola*dirbolay;
    //limites/colisão player
    if ((bolax <= (posplayerx+barraW)) && (((bolay + bolaH) >= posplayery) && (bolay <= posplayery+barraH))){
        dirbolay = ((bolay +(bolaH/2)) - (posplayery + (barraH/2)))/16;
        dirbolax*=-1;
    }
    //colisão com cpu
    if ((bolax >= poscpux-barraW) && (((bolay + bolaH) >= poscpuy) && (bolay <= poscpuy+barraH))){
        dirbolay = ((bolay +(bolaH/2)) - (poscpuy + (barraH/2)))/16;
        dirbolax*=-1;
    }
    bola.style.top = `${bolay}px`;
    bola.style.left = `${bolax}px`;
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
    console.log('down!!');
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