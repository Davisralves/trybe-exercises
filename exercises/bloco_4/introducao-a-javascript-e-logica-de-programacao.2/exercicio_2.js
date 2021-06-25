let n = 5;
n > 1 ? console.log() : console.log('Digite um valor maior que 1');
lista=[];
for(let indice = n; indice > 0; indice -= 1){
    lista.push('*');
    console.log(lista.join(''));
}