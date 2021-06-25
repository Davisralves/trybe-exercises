// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 5;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
let listaAsteristico = ['*']; // primeiro asteristico
let listaVazia = []; // Lista de espaços = n
let contador = 1 ;
let lista = [];
for(let indice = n; indice > 0; indice -= 1){ 
    listaVazia.push(" ");
}
for(let indice = n; indice > 0; indice -= 1){
    listaVazia.pop();
   
    if(indice % 2 != 0 && indice != n && indice != n-1 ){
        contador += 1
        listaAsteristico.splice(listaAsteristico.length - contador,1,'-'); //remove o item central da piramide
        lista.push('*');
        listaAsteristico.unshift(lista);
       
    }
    console.log(listaVazia.join('') + listaAsteristico.join(''))
    listaAsteristico.push('**');
    
}
