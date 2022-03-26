var pessoa = {
    id: "i777",
    email: "kingofshadow01@gmail.com",
    cargo: "administrador"
};
//verificando propriedades com 'in'
function verificar() {
    if ("cargo" in pessoa) {
        console.log("yes!");
    }
}
//perceba que não foi necessario colocar "lanchinho_da_noite" na const
var minhas_refeições = {
    cafe_da_manhã: true,
    almoço: true,
    cafe_da_tarde: true,
    jantar: true
};
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.imprimir = function () {
        console.log(name);
    };
    return Animal;
}());
new Animal("Cat");
//# sourceMappingURL=index.js.map