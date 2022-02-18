import { Car, Color, Porta } from ".";
console.log('oi')
const carTop = new Car('Toyota', Color.preta, 4);
console.log(carTop);
console.log(carTop.honk());
console.log(carTop.closeTheDor(Porta.porta1));
console.log(carTop.openTheDor(Porta.porta2));
console.log(carTop.stop());
console.log(carTop.turn("rigth"));