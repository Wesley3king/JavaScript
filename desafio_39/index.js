const obj = window.document.getElementById('zero');

var vel = 5;
var initial_width = Math.floor(Math.random()*100);
var initial_height = Math.floor(Math.random()*100);
var controle;
var pt = 1, pl = 1;
var px, py;
window.addEventListener("load", function () {
    px = Math.floor(Math.random()*100);
    py = Math.floor(Math.random()*100);
    obj.style.top = `${py}px`;
    obj.style.left = `${px}px`;
    console.log(`add px = ${typeof px}`);
    obj.addEventListener("click", stop);
    play()
});

function play () {
    if(px < 0){
        pl = 1;
    }else if(px > 800){
        pl = -1;
    }else if(py < 0){
        pt = 1;
    }else if(py > 600){
        pt = -1;
    }
    console.log(`px = ${px} // py = ${py}`);
    px += pl*vel;
    py += pt*vel;
    obj.style.top = `${py}px`;
    obj.style.left = `${py}px`;
   controle = requestAnimationFrame(play); 
}

function stop () {
    cancelAnimationFrame(controle);
    obj.addEventListener("click", play);
}
