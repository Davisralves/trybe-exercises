// Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
n > 2 ? console.log() : console.log('Digite um valor maior que 1');
listaAsteristico = ['*']; // primeiro asteristico
listaVazia = []; // Lista de espaços = n
for(let indice = n; indice > 0; indice -= 1){ 
    listaVazia.push(" ");
}
for(let indice = n; indice > 0; indice -= 1){
    listaVazia.pop();
    console.log(listaVazia.join('') + listaAsteristico.join(''))
    listaAsteristico.push('**');
}
