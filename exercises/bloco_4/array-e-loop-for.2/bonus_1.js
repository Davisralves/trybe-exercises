let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
num1= 0;
num2= 0;
var indice = 0;
var contador = 1;
for(let indice2 = 0; indice2 < numbers.length-1; indice2 += 1){
    for( let indice = 0; indice < numbers.length-contador; indice += 1){
        num1= numbers[indice];
        num2= numbers[indice+1]
        if(num1 > num2){
            numbers[indice+1] = num1;
            numbers[indice] = num2;
        }
        else if(num1 <= num2){}

    }
    contador +=1 ;
}
console.log(numbers); 