const player = document.querySelector("#player"), vitória = document.querySelector("#win"), placar = document.querySelector("#faltam"), frase = document.querySelector('#result'),barra = document.querySelector(".barra");
//variaveis padrão
var width = window.innerWidth, height = window.innerHeight,barraW = 100, barraH = 15;

//variaveis do jogador
var timedirX = 0, timedirY = 0, playerX, playerY;
//controles
var jogo = false;
var animation, velocidade,velTiros,velbomb;
var bombas = 150;
var lvl = 0;
var bombas_ativas,intBomb, life, restantes, level, action;
var ind = 0, indsom = 0, stt = 0;

function cst (t) {
    if (t.keyCode === 13)
     start()
}

function  iniciar () {
    document.addEventListener("keydown", cst);
    vitória.setAttribute("onclick","start()");
    frase.textContent = "start";
    //velocidades
    velTiros = velocidade = 3;
    velbomb = 1;

    playerX = (width/2)-15;
    playerY = height/2;
    
}
function start () {
    document.removeEventListener("keydown",cst);
    document.addEventListener("keydown",Tdown);
    document.addEventListener("keyup",Tup);  
    if (sessionStorage.level === undefined) {
        sessionStorage.level = 0;
    }else {
        lvl = parseInt(sessionStorage.level);
        sessionStorage.level = (parseInt(sessionStorage.level)+1);
    }
    level = (5000 - (500*lvl));
    console.log(lvl,sessionStorage.level);
    jogo = true;
    vitória.style.display= "none";
    restantes = 3;
    life = 100;
    barra.style.width = `${life}px`;
    restantes = 3;
    if (level === 0) {
        level = 100;
    }
    clearInterval(intBomb);
    console.log(level)
    intBomb = setInterval(bombardear,level);
    placar.textContent = `${restantes}`;
    controle_animation();
}

function controle_animation () {
    if (jogo) {
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

        
        let bn = bombas_ativas[i].offsetLeft;
        let bont = bombas_ativas[i].offsetTop;
        let nvL = playerX;
        //console.log((nvL) >= bn) || (nvL <= (bn +24));
        if (((nvL+24) >= bn) && (nvL <= (bn +24)) && ((playerY <= (bont+40)) && ((playerY+30) >= bont))) {
            
            explodir(true,bombas_ativas[i].offsetLeft-25, bombas_ativas[i].offsetTop);
            bombas_ativas[i].remove();
            player.remove();
            win_or_lose(false);
            
        }
        if (psb > height) {
            explodir(false,bombas_ativas[i].offsetLeft, null);
            bombas_ativas[i].remove();
            life-= 50;
            barra.style.width = `${life}px`;
            if (life <= 0)
              win_or_lose(false);
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

            colisao(tiros[i]);
            if (pst < 0 && tiros[i] !== undefined) {
                tiros[i].remove();
            }
            
        }
    }
}
function colisao (tiro) {
    
    let min = tiro.offsetLeft;

    for (let e = 0; e < bombas_ativas.length; ++e) {
        if (bombas_ativas[e]) {
        let basd = bombas_ativas[e];
        let bn = basd.offsetLeft;
        let bont = basd.offsetTop;
        let tiroTop = tiro.offsetTop;
        let tiroL = tiro.offsetLeft;

        if (((min+6) >= bn) && (tiroL <= (bn +24)) && ((tiroTop <= (bont+40)) && ((tiroTop+6) >= bont))) {
            
            explodir(true,bombas_ativas[e].offsetLeft-25, bombas_ativas[e].offsetTop);
            bombas_ativas[e].remove();
            tiro.remove();
            --restantes;
            placar.textContent = `${restantes}`;
            if (restantes === 0) 
              win_or_lose(true);
            
        }
    }}
}

function explodir (tipo, x, y = 0) {
    //console.log(`x = ${x} // y = ${y}`);
    //limites 
    if(document.getElementById(`explosao${ind-5}`))
    {
        console.log("ta indo")
        document.getElementById(`explosao${ind-5}`).remove();
    }
    let explode = document.createElement("div");
    let img = document.createElement("img");
    let som = document.createElement("audio");

    //atributos
    let estilo = document.createAttribute("style");
        explode.setAttribute("id",`explosao${ind}`);

        som.setAttribute("src","./exp1.mp3?"+indsom);
        som.setAttribute("id" , `som${indsom}`);
        explode.setAttribute("id",`explosao${ind}`);
        

    if (tipo) {//AR
      explode.setAttribute("class","explosionAr");
      estilo.value = `top: ${y}px;left: ${x}px;`;
      img.setAttribute("src","./explosao_ar.gif?"+ind);
    }else {//CHAO
        explode.setAttribute("class","explosionChao");
        estilo.value = `top: ${height - 53}px;left: ${x-17}px;`;
        img.setAttribute("src","./explosao_chao.gif?"+ind);
    }
    explode.setAttributeNode(estilo);
explode.appendChild(img);
explode.appendChild(som);
document.body.appendChild(explode);

document.body.querySelector(`#som${indsom}`).play();
    ind++,indsom++;

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
    let audio = document.createElement("audio");
    audio.setAttribute("src", "./tiro.wav?"+stt);
    audio.setAttribute("type","audio/wav");
    tiro.setAttribute("class","tiro");
    let classe = document.createAttribute("style");
    classe.value = `top: ${y}px;left: ${x}px;`;
    tiro.setAttributeNode(classe);
    tiro.appendChild(audio);
    document.body.appendChild(tiro);
    audio.play();
}
function win_or_lose (final) {
    jogo = !jogo;
    clearInterval(intBomb);
    cancelAnimationFrame(animation);
    vitória.style.display= "block";
    vitória.setAttribute("onclick","restart()");
    if (final) {
        frase.innerHTML = `vitória! <br> <small style="font-size: 20px;">try Again</small>`;
    }else {
        vitória.style.backgroundColor = "red";
        frase.innerHTML = `you lose! <br> <small style="font-size: 20px;">try Again</small>`;
        sessionStorage.removeItem("level");
    }
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

function restart () {
        location.reload();
}