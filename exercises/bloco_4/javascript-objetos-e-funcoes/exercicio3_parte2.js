// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array1 =  [2, 3, 6, 7, 10, 1]; 
function maiorIndice(array){
    let indiceMaior = 0;
    for(let indice = 0; indice <= array.lenght - 1; indice += 1){
        if (array[indice] > array[indice + 1]){
            indiceMaior = indice;
            console.log(array[indice]);
        }
        else{
            indiceMaior = indice + 1;
            console.log(array[indice]);
        }
    }
    return indiceMaior;
}
console.log(maiorIndice(array1));