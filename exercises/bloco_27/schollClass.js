var arrayDe6Numeros;
var person = /** @class */ (function () {
    function person(name, birthName) {
        if (name.length >= 3) {
            this.name = name;
        }
        var regex = /\d\d\/\d\d\/\d\d\d\d/;
        if (regex.test(birthName) && parseInt(birthName.slice(6)) >= 1902) {
            this.birthName = birthName;
        }
    }
    return person;
}());
var person1 = new person('josé', '29/06/1997');
var person2 = new person('Kiko', '29/06/1800');
console.log(person1.name);
console.log(person1.birthName);
console.log(person2.name);
console.log(person2.birthName);
var Estudante = /** @class */ (function () {
    function Estudante(matricula, nome, notas) {
        this.matricula = matricula;
        this.nome = nome;
        this.notas = notas;
    }
    Estudante.prototype.somaDasNotas = function () {
        return this.notas.reduce(function (acumulador, nota) { return acumulador + nota; });
    };
    Estudante.prototype.calculaMedia = function () {
        return this.somaDasNotas() / 6;
    };
    return Estudante;
}());
var notas = [7, 7, 7, 8, 8, 8];
var estudante = new Estudante('siajdj209jdqoi', 'Davi', notas);
console.log(estudante.nome, estudante.somaDasNotas(), estudante.calculaMedia());
