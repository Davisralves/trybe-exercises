import { Car, Color } from ".";
console.log('oi')
const carTop = new Car('Toyota', Color.preta, 4);
console.log(carTop);
console.log(carTop.honk());
console.log(carTop.closeTheDor(2));
console.log(carTop.openTheDor(2));
console.log(carTop.stop());
console.log(carTop.turn("rigth"));