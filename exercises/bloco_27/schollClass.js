var arrayDe6Numeros;
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
