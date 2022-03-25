interface learn {
    front_end: 'html/css/js' | 'html/css/ts' | 'html/css/js/ts' | string;
    fullstack: boolean;
    back_end: 'php' | 'node' | 'java' | 'python' | '.net/c#' | string;
    dataBase_type: 'relacional' | 'não relacional';
    dataBase_language: 'SQL' | 'mongoDB' | string;
}

interface leraning {
    teminado: 'html/css' | string;
    doing: string;
}

type programm = learn & leraning;

const aprendizado: programm = {
    front_end: 'html/css/js/ts',
    fullstack: true,
    back_end: 'node',
    dataBase_type: 'relacional',
    dataBase_language: 'SQL',
    teminado: 'ainda nada',
    doing: 'html/css/js/ts/  jQuery'
}

//extraindo valores de inputs

const recebe = window.document.querySelector('#one') as HTMLInputElement;

recebe.addEventListener('input',(event)=>{
    let tratado = event.currentTarget as HTMLInputElement;
    console.log(tratado.value);
})

//generic types

function somar <T>(array: T[], valor: any) {
    return array.map(item=> valor);
}

let resultado = somar([1, 2, 3], 4)