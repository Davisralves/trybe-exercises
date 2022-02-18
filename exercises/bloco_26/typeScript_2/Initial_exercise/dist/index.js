"use strict";
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 1] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 2] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 3] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 4] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 5] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 6] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 7] = "sabado";
})(diasDaSemana || (diasDaSemana = {}));
console.log(diasDaSemana);
var pontosCardiais;
(function (pontosCardiais) {
    pontosCardiais["norte"] = "N";
    pontosCardiais["sul"] = "S";
    pontosCardiais["leste"] = "L";
    pontosCardiais["oeste"] = "O";
})(pontosCardiais || (pontosCardiais = {}));
console.log(pontosCardiais.norte, pontosCardiais);
const sum = (v) => v.one + v.two;
console.log(sum({ one: 1, two: 2 }));
class Dog {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
const dog1 = new Dog('kika', 10, 'preto');
const dog2 = new Dog('sofia', 8, 'cinza');
console.log(dog1, dog2);
