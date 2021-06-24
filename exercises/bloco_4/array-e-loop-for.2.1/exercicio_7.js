let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 10;
for(let numero of numbers){
if(numero < menorValor){
menorValor = numero
}
}
console.log(menorValor);