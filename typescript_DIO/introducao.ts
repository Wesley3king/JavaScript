//function somar
function soma (a: number,b: number) {
    return a + b;
}
console.log(soma(5,6));

//interfaces 

interface trees {
    nome : "pé de manga"|"jaboticabeira"|"pé de acerola";
    tipo: "fruta";
    tamanho: "pequena"|"média"|"grande";
}

const manga: trees = {
    nome: "pé de manga",
    tipo: "fruta",
    tamanho: "grande"
}

interface frutos extends trees {
    fruto: "manga"|"jaboticaba"|"acerola"
}

const jaboticaba: frutos = {
    nome: "jaboticabeira",
    tipo: "fruta",
    tamanho: "pequena",
    fruto: "manga"
}

console.log(jaboticaba);