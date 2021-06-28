//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let n = 5;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
let lista=[];
for(let indice = n; indice > 0; indice -= 1){
    lista.push('*');
    console.log(lista.join(''));
}