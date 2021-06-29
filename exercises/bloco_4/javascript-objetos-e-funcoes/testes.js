// Crie uma função que receba um array de inteiros e retorne o índice do Maior valor.
let array =  [2, 3, 6, 7, 10, 1]; 
function maiorIndice(array){
    let maiorvalor = 0;
    let index2;
    for(let index in array){    
        if(array[index] > array[maiorvalor]){
            maiorvalor = index;
        }
        else{}
    }
    
        return maiorvalor;
    
}
let resposta = maiorIndice(array);
console.log(resposta)