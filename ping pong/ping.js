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
var posplayerx,poscpux,poscpuy;
var posplayery;
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
    iniciar = window.document.querySelector('#btIniciar');
    iniciar.setAttribute('onclick','primeiro_passo()');
    player = window.document.querySelector('#dvJogador');
    cpu = window.document.querySelector('#dvCPU');
    bola  = window.document.querySelector('#dvBola');
    painel_pontos = window.document.querySelector('#txtPontos');
    document.addEventListener('keydown',down);
    document.addEventListener('keyup',up);

}
window.addEventListener('load',inicializar);
//start

function primeiro_passo () {
    if (!game) {
        velbola = velcpu = velplayer = 8;
        console.log(velbola);
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
        contol_cpu();
    }
    frame = requestAnimationFrame(controle_animation);
}

function control_player () {
    if (game) {
        /*if ((posplayery+barraH) >= campoH || posplayery <= 0){
            //posplayery += (velplayer * dirJy) * -1; 
            dirJy = 0;
            console.log(posplayery+barraH,campoH);

        }*/
        if ((posplayery+barraH) >= campoH) {
            dirJy = -1;
        }else if (posplayery <= 0) {
            dirJy = 1;
        }
        posplayery +=(velplayer * dirJy);
        player.style.top= `${posplayery}px`;
    }
}
//controle da bola
function controle_bola () {
    bolax += velbola*dirbolax;
    bolay += velbola*dirbolay;
    //limites/colisão player
    if ((bolax <= (posplayerx+barraW)) && (((bolay + bolaH) >= posplayery) && (bolay <= posplayery+barraH))){
        dirbolay = ((bolay +(bolaH/2)) - (posplayery + (barraH/2)))/32;
        dirbolax*=-1;
    }
    //colisão com cpu
    if ((bolax >= poscpux-barraW) && (((bolay + bolaH) >= poscpuy) && (bolay <= poscpuy+barraH))){
        dirbolay = ((bolay +(bolaH/2)) - (poscpuy + (barraH/2)))/32;
        dirbolax*=-1;
    }
    //limites superior/inferior
    if ((bolay >= 480) || (bolay <= 0)) {
        dirbolay*=-1;
    }
    //saiu é ponto / defeat
    if (bolax >= (campoW - bolaW)) {
        console.log('ponto!');
        win();
    }else if (bolax <= 0) {
        console.log('ponto_da_cpu!');
        velbola = 0;
        bolax = posbolainiX;
        bolay = posbolainiY;
        posplayerx = posjoginiX;
        posplayery = posjoginiY;
        pontos--;
        painel_pontos.value = pontos;
        game = false;
        player.style.top= `${posplayery}px`;
        cpu.style.top = `${poscpuy}px`;
    }
    bola.style.top = `${bolay}px`;
    bola.style.left = `${bolax}px`;
}
//contole da cpu / movimentar cpu
function contol_cpu () {
    if (game) {
        if (bolax > (campoW/2) && (bolax > 0)) {
            // movimentar cpu
            if ((bolay + (bolaH/2)) > ((poscpuy+ (barraH/2)) + velcpu)){
                //to down
                if ((poscpuy + barraH) <= (campoH)){
                    poscpuy += velcpu;
                    console.log('desceu!');
                }
            }else if ((bolay + (bolaH/2)) < (poscpuy + (barraH/2)) - velcpu){
                //to up
                if (poscpuy >= 0){
                    poscpuy -= velcpu;
                    console.log('subiu!');
         }
        }
        }else{
            //posicionar cpu ao centro
            if ((poscpuy + (barraH/2)) < (campoH/2)) {
                poscpuy += velcpu;
            }else if ((poscpuy + (barraH/2)) > (campoH/2)) {
                poscpuy -= velcpu;
            }
        }
        cpu.style.top = `${poscpuy}px`;
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
function win () {
    cancelAnimationFrame(frame);
    velbola = 0;
    bolax = posinitialbolax;
    bolay = posinitialbolay;
    posplayerx = posjoginiX;
    posplayery = posjoginiY;
    pontos++;
    painel_pontos.value = pontos;
    game = false;
    player.style.top= `${posplayery}px`;
    cpu.style.top = `${poscpuy}px`;
}