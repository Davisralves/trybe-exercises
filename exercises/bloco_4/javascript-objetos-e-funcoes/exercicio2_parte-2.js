//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
array1 =  [2, 3, 6, 7, 10, 1]; 
function maiorIndice(array){
    let maiorIndice = 0;
    for(let indice = 0; indice <= array.lenght - 1; indice += 1){
        if (array[maiorIndice] < array[indice]){
            maiorIndice = indice;
            console.log(array[indice]);
        }
    }
    return maiorIndice;
}
console.log(maiorIndice(array1));