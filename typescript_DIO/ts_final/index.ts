import $ from './jquery';
interface user {
    id: string;
    email: string;
    cargo: "usuario" | "administrador";
}
const pessoa: user = {
    id: "i777",
    email: "kingofshadow01@gmail.com",
    cargo: "administrador"
}
//verificando propriedades com 'in'
function verificar () {
    if ("cargo" in pessoa){
        console.log("yes!");
    }
}

//variaveis opcionais com '?'

interface refeições {
    cafe_da_manhã?: boolean;
    almoço: boolean;
    cafe_da_tarde?: boolean;
    jantar: boolean;
    lanchinho_da_noite?: boolean;
}
//perceba que não foi necessario colocar "lanchinho_da_noite" na const
const minhas_refeições: refeições = {
    cafe_da_manhã: true,
    almoço: true,
    cafe_da_tarde: true,
    jantar: true
}

//readonly e private
type necessarias = {
    readonly [k in keyof refeições]-?: refeições[k];
}
class Animal {
    private name: string;
   
    constructor(theName: string) {
      this.name = theName;
    }
    public imprimir () {
        console.log(name);
    }
  }
  new Animal("Cat");
//impotando bibliotecas (ex : jQuery)
$('#di').css('background-color','black');

//omit
interface favoritos extends Omit<user,'email'>{
    fav: any[];
}

const mangás: favoritos = {
    id: "ygfyu",
    cargo: "usuario",
    fav: [1 ,4 ,6 ,7]
}

