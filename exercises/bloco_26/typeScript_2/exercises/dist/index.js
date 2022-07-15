"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Porta = exports.Color = void 0;
var Color;
(function (Color) {
    Color["preta"] = "Black";
    Color["branco"] = "White";
    Color["vermelho"] = "Red";
    Color["prata"] = "Silver";
})(Color = exports.Color || (exports.Color = {}));
var Porta;
(function (Porta) {
    Porta["porta1"] = "Porta traseira do lado esquerdo";
    Porta["porta2"] = "Porta traseira do lado direito";
    Porta["porta3"] = "Porta frontal do motorista";
    Porta["porta4"] = "Porta do Passageiro";
})(Porta = exports.Porta || (exports.Porta = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log("Carro Buzinando !");
    }
    openTheDor(porta) {
        console.log(`Abrindo porta ${porta}`);
    }
    closeTheDor(porta) {
        console.log(`fechando porta ${porta}`);
    }
    turnOn() {
        console.log("Carro ligado");
    }
    turnOf() {
        console.log("Carro desligado");
    }
    speedUp() {
        console.log("acelera carro");
    }
    speedDown() {
        console.log("Freia carro");
    }
    stop() {
        console.log("Carro Parou");
    }
    turn(turn) {
        console.log(`carro virando para ${turn}`);
    }
}
exports.Car = Car;
