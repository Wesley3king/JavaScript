var aprendizado = {
    front_end: 'html/css/js/ts',
    fullstack: true,
    back_end: 'node',
    dataBase_type: 'relacional',
    dataBase_language: 'SQL',
    teminado: 'ainda nada',
    doing: 'html/css/js/ts/  jQuery'
};
//extraindo valores de inputs
var recebe = window.document.querySelector('#one');
recebe.addEventListener('input', function (event) {
    var tratado = event.currentTarget;
    console.log(tratado.value);
});
//generic types
function somar(array, valor) {
    return array.map(function (item) { return valor; });
}
var resultado = somar([1, 2, 3], 4);
//# sourceMappingURL=index.js.map