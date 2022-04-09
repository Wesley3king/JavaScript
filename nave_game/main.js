const player = document.querySelector("#player"), vitória = document.querySelector("#win"), placar = document.querySelector("#faltam"), frase = document.querySelector('#result'),barra = document.querySelector(".barra");
//variaveis padrão
var width = window.innerWidth, height = window.innerHeight,barraW = 100, barraH = 15;

//variaveis do jogador
var timedirX = 0, timedirY = 0, playerX, playerY;

//controles
var jogo = false, animation, velocidade,velTiros,velbomb, bombas = 150, bombas_ativas,intBomb, life;

function  iniciar () {
    document.addEventListener("keydown",Tdown);
    document.addEventListener("keyup",Tup);
    vitória.setAttribute("onclick","start()");
    frase.textContent = "start";
    //velocidades
    velTiros = velocidade = 3;
    velbomb = 2;

    playerX = (width/2)-30;
    playerY = 100;
    life = 100;
    
}
function start () {
    jogo = true;
    vitória.style.display= "none";
    clearInterval(intBomb);
    intBomb = setInterval(bombardear,1700);
    controle_animation();
}

function controle_animation () {
    if (jogo) {
        placar.innerHTML = bombas;
        movimento();
        controle_tiros();
        controle_bomba();
    }
    animation = requestAnimationFrame(controle_animation);
}

function movimento () {
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

function controle_bomba () {
    bombas_ativas = document.getElementsByClassName("bomb");
    for (let i = 0; i < bombas_ativas.length; ++i) {
        let psb = bombas_ativas[i].offsetTop;
        psb += velbomb;
        bombas_ativas[i].style.top=`${psb}px`;
        if (psb > height && bombas_ativas[i] !== undefined) {
            bombas_ativas[i].remove();
            --life;
        }
    }
}

function controle_tiros () {
    let tiros = document.getElementsByClassName("tiro");
    for (let i = 0; i < tiros.length; ++i) {
        if (tiros[i]) {
            let pst = tiros[i].offsetTop;
            pst -= velTiros;
            tiros[i].style.top= `${pst}px`;
            let min = tiros[i].offsetLeft;
            let max = min+6;

            for (let e = 0; e < bombas_ativas.length; ++e) {
                let bn = bombas_ativas[e].offsetTop;
                let bx = bn+24;
                if ( max >= bn || min <= bx ) {
                    bombas_ativas[e].setAttribute("class","explosion");
                    tiros[i].remove();
                    setTimeout(()=> bombas_ativas[e].remove(), 2000);
                }
            }
            if (pst < 0 && tiros[i] !== undefined) {
                tiros[i].remove();
            }
            
        }
    }
}
function bombardear () {
    let bomb = document.createElement("div");
    bomb.setAttribute("class","bomb");
    let classe = document.createAttribute("style");
    classe.value = `top: 0px;left: ${Math.round(Math.random()*(width-24))}px;`;
    bomb.setAttributeNode(classe);
    document.body.appendChild(bomb);
    --bombas;
}

function atirar (x,y) {
    let tiro = document.createElement("div");
    tiro.setAttribute("class","tiro");
    let classe = document.createAttribute("style");
    classe.value = `top: ${y}px;left: ${x}px;`;
    tiro.setAttributeNode(classe);
    document.body.appendChild(tiro);
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
        atirar(playerX+12,playerY);
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
}