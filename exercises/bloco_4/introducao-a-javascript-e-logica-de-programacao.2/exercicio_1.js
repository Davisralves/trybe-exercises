//faça um programa que, dado um valor n qualquer, seja n > 1 e 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
let lista=[];
for(let indice = n; indice > 0; indice -= 1){
    lista.push('*');
}
for(let indice = n; indice > 0; indice -= 1){   
    console.log(lista.join(''));
}