let n = 12;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
let listaAsteristico = ['*']; // primeiro asteristico
let listaVazia = []; // Lista de espaços = n
let contador = 0;
for(let indice = n; indice > 0; indice -= 1){ 
    listaVazia.push(" ");
}
for(let indice = n; indice > 0; indice -= 1){
    listaVazia.pop();
    contador += 1;
    if(contador > 2 && contador % 2 != 0){
        listaAsteristico.splice(((contador/2)), 1,'-');
        if(contador == 3){
            console.log(listaVazia.join('') + "*" + listaAsteristico.join(''));
            listaAsteristico.splice(((contador/2)), 1 ,'*');
        }
        else{
            console.log(listaVazia.join('') + "**" + listaAsteristico.join(''));
            listaAsteristico.splice(((contador/2)), 1 ,'*');
        }
    }
   else{
        if(contador > 3){
        console.log(listaVazia.join('')+ listaAsteristico.join('') + '*')
        }
        else{
            console.log(listaVazia.join('')+ listaAsteristico.join('') )
        }
    }
    listaAsteristico.push('**');
}