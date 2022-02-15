const local = window.document.querySelector('#lll');
const local_dica = window.document.querySelector('#dica');
const palavras = [['animal','objeto','um dos quatro elementos','arvore','pode matar','tem penas','tem a noite','planeta'],['urso','pente','vento','araucaria','veneno','galinha','lua','saturno']];
const partes =[window.document.querySelector('#braco_left'),window.document.querySelector('#braco_right'),window.document.querySelector('#perna_right'),window.document.querySelector('#perna_left'),window.document.querySelector('#corpo2'),window.document.querySelector('#cara')];
var espaços = [];
var num;
var win_points = 0;

function verificar () {
    let vv = window.document.querySelector('#valor').value
    let fin = palavras[1][num].indexOf(vv);
    if(fin !== -1) {
        let moded = palavras[1][num];
        console.log('foi / '+moded);

        for (let i  = 0;i < palavras[1][num].length;++i) {
            let nd = moded.indexOf(vv);
            console.log(moded +'//'+moded.indexOf(vv));
            if (nd !== -1) {
            espaços[nd].innerHTML = vv;
            moded = moded.replace(`${vv}`, '*');
            ++win_points
            }
        }
        if (win_points === palavras[1][num].length) {
            document.write('você ganhou');
        }
    }else{
        
    }
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