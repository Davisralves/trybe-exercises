// Agora inverta o lado do triângulo:
let n = 5;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
listaAsteristico = [];
listaVazia = [];
for(let indice = n; indice > 0; indice -= 1){
    listaVazia.push(" ");
}
for(let indice = n; indice > 0; indice -= 1){
    listaAsteristico.push('*')
    listaVazia.pop();
    console.log(listaVazia.join('') + listaAsteristico.join(''))
}

