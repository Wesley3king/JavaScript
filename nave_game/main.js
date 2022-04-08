const player = document.querySelector("#player"), vitória = document.querySelector("#win"), placar = document.querySelector("#faltam"), frase = document.querySelector('#result'),barra = document.querySelector(".barra");
//variaveis padrão
var width = window.innerWidth, height = window.innerHeight,barraW = 100, barraH = 15;

//variaveis do jogador
var timedirX = 0, timedirY = 0, playerX, playerY;

//controles
var jogo = false, animation, velocidade, pontos = 150;

function  iniciar () {
    document.addEventListener("keydown",Tdown);
    document.addEventListener("keyup",Tup);
    vitória.setAttribute("onclick","start()");
    frase.textContent = "start";
    velocidade = 3;
    playerX = (width/2)-30;
    playerY = 100;
    
}
function start () {
    jogo = true;
    vitória.style.display= "none";

    controle_animation();
}

function controle_animation () {
    if (jogo) {
        placar.innerHTML = pontos;
        movimento();
    }
    animation = requestAnimationFrame(controle_animation);
}

function movimento () {
   
    console.log(`direcao x : ${playerX} / y : ${playerY}`);
    console.log(`tecla dir x : ${timedirX} / y : ${timedirY}`);
    //limites da arena left / top
    if ((playerX < 0) || (playerX > (width-30))) {
        timedirX *=-1.3; 
    }
    if ((playerY < 0) || (playerY > (height-30))) {
        timedirY *=-1.3; 
    }
    playerX += (timedirX*velocidade);
    playerY += (timedirY*velocidade);
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

iniciar();
function Tdown (tecla) {
    let valor = tecla.keyCode;
    if (valor === 37) {//esquerda
        timedirX = -1;
    }else if (valor === 39) {//direita
        timedirX = 1;
    }

    if (valor === 38) {//cima
        timedirY = -1;
    }else if(valor === 40){//baixo
        timedirY = 1;
    }

    if (valor === 32) {//espaço

    }
}

function Tup (tecla) {
    let valor = tecla.keyCode;
    if ((valor === 37) || (valor === 39)) {
        timedirX = 0;
    }
    if ((valor === 38) || (valor === 40)) {
        timedirY = 0;
    }
    if (valor === 32) {
        
    }
}