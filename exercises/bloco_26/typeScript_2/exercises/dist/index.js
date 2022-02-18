"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Color = void 0;
var Color;
(function (Color) {
    Color["preta"] = "Black";
    Color["branco"] = "White";
    Color["vermelho"] = "Red";
    Color["prata"] = "Silver";
})(Color = exports.Color || (exports.Color = {}));
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
        console.log('Carro ligado');
    }
    turnOf() {
        console.log('Carro desligado');
    }
    speedUp() {
        console.log('acelera carro');
    }
    speedDown() {
        console.log('Freia carro');
    }
    stop() {
        console.log('Carro Parou');
    }
    turn(turn) {
        console.log(`carro virando para ${turn}`);
    }
}
exports.Car = Car;
