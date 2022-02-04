const obj = window.document.getElementById('zero');
var bt = window.document.getElementById('one');

var vel = 5;
var initial_width = Math.floor(Math.random()*100);
var initial_height = Math.floor(Math.random()*100);
var controle;
var pt = 1, pl = 1;
var px, py;

var auto;
window.addEventListener("load", function () {
    px = Math.floor(Math.random()*200);
    py = Math.floor(Math.random()*200);
    obj.style.top = `${py}px`;
    obj.style.left = `${px}px`;
    console.log(`add px = ${typeof px}`);
    auto = 1;
});
async function charge () {
    obj.style.background="aqua";
    bt.setAttribute("onclick", "stop()");
    bt.innerText = "parar";
}
async function play () {
    if(auto === 1) {
        charge();
        auto = 0;
        console.log('auto = ' + auto);
    }
    let num = Math.floor(Math.random()*10);
    console.log(num);
    if (num <= 5 && py < 0){
        pt = 1;
        pl = 0;
    }else if(num <= 5 && py > 600){
        pt = -1;
        pl = 0;
    }else if(px < 0){
        pl = 1;
        pt = 0;
    }else if(px > 800){
        pl = -1;
        pt = 0;
    }
/*
    if(px < 0){
        pl = 1;
    }else if(px > 800){
        pl = -1;
    }else if(py < 0){
        pt = 1;
    }else if(py > 600){
        pt = -1;
    }*/
    console.log(`px = ${px} // py = ${py}`);
    px += pl*vel;
    py += pt*vel;
    obj.style.top = `${py}px`;
    obj.style.left = `${py}px`;
   controle = requestAnimationFrame(play); 
   obj.setAttribute("onclick", "stop()");
}

function stop () {
    obj.style.background="red";
    cancelAnimationFrame(controle);
    obj.setAttribute("onclick", "play()");
    bt.setAttribute("onclick", "play()");
    bt.innerText = "iniciar";
    auto = 1;

}
