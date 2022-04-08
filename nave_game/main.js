const player = document.querySelector("#player"), vitória = document.querySelector("#win"), placar = document.querySelector("#placar");
//variaveis do jogador
var timedirX, timedirY, playerX, playerY;


function tdown (tecla) {
    let valor = tecla.keyCode;
    if (valor === 37) {//esquerda
        timedirX = 1;
    }else if (valor === 39) {//direita
        timedirX = -1;
    }

    if (valor === 38) {//cima
        timedirY = 1;
    }else if(valor === 40){//baixo
        timedirY = -1;
    }

    if (valor === 35) {//espaço

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
    if (valor === 35) {
        
    }
}