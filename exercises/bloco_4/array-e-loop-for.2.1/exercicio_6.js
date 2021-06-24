let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for(let numero of numbers){
if(numero % 2 != 0){
impar += 1;
}
}
console.log(impar)