const local = window.document.querySelector('#lll');
const inp = window.document.querySelector('#go');
const lose_win = window.document.querySelector('#win');
const local_dica = window.document.querySelector('#dica');
const palavras = [['animal','objeto','um dos quatro elementos','arvore','pode matar','tem penas','tem a noite','planeta'],['urso','pente','vento','araucaria','veneno','galinha','lua','saturno']];
const partes =[window.document.querySelector('#braco_left'),window.document.querySelector('#braco_right'),window.document.querySelector('#perna_right'),window.document.querySelector('#perna_left'),window.document.querySelector('#corpo2'),window.document.querySelector('#cara')];
var espaços = [];
var caracteres = [];
var num;
var win_points = 0;
var erros = 0;

function verificar () {
    let vv = window.document.querySelector('#valor').value;
    vv = vv.toLowerCase();
    let fin = palavras[1][num].indexOf(vv);
/*
    caracteres[0].push(vv);
    caracteres[1].push(1);
    for (let i in caracteres[0]){
        if(caracteres[0][i] === vv) {
            caracteres[1][i]++;
        }
    }
*/
    console.log(caracteres);
    if(fin !== -1) {
        let moded = palavras[1][num];
        console.log('foi / '+moded);
        if (caracteres.indexOf(vv) !== -1) {
            erros++;
            console.log('ja tem'+caracteres.indexOf(vv));
            console.log('erro')
        partes[erros].style.display= 'none';
        if(erros == 0) {
            partes[2].style.marginTop="-1px";
            partes[3].style.marginTop="-1px";

        }else if(erros === 5) {
            lose_win.setAttribute('class','you_lose');
            lose_win.innerHTML = "derrota";
            inp.style.display="none";
            next(3);
        }
        }else{
        for (let i  = 0;i < palavras[1][num].length;++i) {
            
            let nd = moded.indexOf(vv);
            console.log(moded +'//'+moded.indexOf(vv));
            if (nd !== -1) {
            espaços[nd].innerHTML = vv;
            moded = moded.replace(`${vv}`, '*');
            ++win_points
            }
        }
    }
        if (win_points === palavras[1][num].length) {
            inp.style.display="none";
            lose_win.setAttribute('class','you_win');
            lose_win.innerHTML = "vitória";
            next(2);
        }
    }else{
        console.log('erro')
        partes[erros].style.display= 'none';
        if(erros == 0) {
            partes[2].style.marginTop="-1px";
            partes[3].style.marginTop="-1px";

        }else if(erros === 5) {
            lose_win.setAttribute('class','you_lose');
            lose_win.innerHTML = "derrota";
            inp.style.display="none";
            next(3);
        }
        erros++
    }
    caracteres.push(vv);
}

function start () {
    let numero = Math.round(Math.random()*(palavras[0].length-2));
    num = numero;
    local_dica.innerText = `dica: ${palavras[0][numero]}`;
    //console.log(palavras[1].length + '// '+ num);
    for (let i = 0; i < palavras[1][numero].length; ++i) {
        espaços.push(window.document.createElement('div'));
        espaços[i].setAttribute('class', 'vazio');
        window.document.querySelector('#letters').appendChild(espaços[i]);
    }
}
start();

//next or prev

function next(v) {
    lose_win.style.display='block';
    if (v === 2) {
    let nxt = window.document.createElement('div');
    nxt.setAttribute('class','nnn');
    nxt.innerText = 'próximo';
    nxt.addEventListener('click',restarts);
    lose_win.appendChild(nxt);
    }else if(v === 3){
        let ggg = window.document.createElement('div');
        ggg.setAttribute('class','ppp');
        ggg.innerText = 'tente novamente';
        ggg.addEventListener('click',restart);
        lose_win.appendChild(ggg);
    }
}

function restart () {
    espaços = [];
    caracteres = [];
    win_points = 0;
    local_dica.innerText = '';
    window.document.querySelector('#letters').innerText = '';
    for (let i in partes) {
        partes[i].style.display='block';
    }
    start();
    lose_win.innerHTML = '';
    lose_win.style.display='none';
    inp.style.display="block";
}
function restarts() {
    espaços = [];
    caracteres = [];
    win_points = 0;
    local_dica.innerText = '';
    window.document.querySelector('#letters').innerText = '';
    start();
    lose_win.innerHTML = '';
    lose_win.style.display='none';
    inp.style.display="block";
}