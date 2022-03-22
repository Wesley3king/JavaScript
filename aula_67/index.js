//history.length
const show = window.document.querySelector('.painel');
show.innerText = `historico : ${history.length}`;
//forward()
function nxt () {
    window.history.forward();
}
//back()
function prev () {
    window.history.back();
}
//go(x)
function mais (v) {
    switch (v) {
        case 1:
            window.history.go(2);
         break
        case 2:
            window.history.go(-2);
         break
    }
}