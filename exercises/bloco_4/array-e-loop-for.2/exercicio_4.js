let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let numeros of numbers){
   sum += numeros;
}
if(sum > 20){
    console.log('Valor maior que 20')
}
else{
    console.log("valor menor ou igual a 20")
}