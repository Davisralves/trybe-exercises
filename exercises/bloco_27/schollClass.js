var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d;}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arrayDe6Numeros;
var Person = /** @class */ (function () {
    function Person(_name, _birthName) {
        this._name = _name;
        this._birthName = _birthName;
        // const regex = /\d\d\/\d\d\/\d\d\d\d/
        // console.log(regex.test(birthName), parseInt(birthName.slice(6)))
        // if(regex.test(birthName) && parseInt(birthName.slice(6)) >= 1902) {
        //   this._birthName = _birthName;
        // }
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            if (this._name.length >= 3) {
                return this._name;
            }
            return 'Nome precisa ter pelo menos 3 caracteres';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthName", {
        get: function () {
            return this._birthName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person('josé', '29/06/1997');
var person2 = new Person('Kiko', '29/06/1800');
console.log(person1.name);
console.log(person1.birthName);
console.log(person2.name);
console.log(person2.birthName);
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(_name, _birthName, matricula, notas) {
        var _this = _super.call(this, _name, _birthName) || this;
        _this._name = _name;
        _this._birthName = _birthName;
        _this.matricula = matricula;
        _this.notas = notas;
        return _this;
    }
    Estudante.prototype.somaDasNotas = function () {
        return this.notas.reduce(function (acumulador, nota) { return acumulador + nota; });
    };
    Estudante.prototype.calculaMedia = function () {
        return this.somaDasNotas() / 6;
    };
    return Estudante;
}(Person));
var notas = [7, 7, 7, 8, 8, 8];
var estudante = new Estudante('Di', '29/06/1997', '92e1y92178y912', notas);
console.log(estudante.name, estudante.birthName, estudante.somaDasNotas(), estudante.calculaMedia());
