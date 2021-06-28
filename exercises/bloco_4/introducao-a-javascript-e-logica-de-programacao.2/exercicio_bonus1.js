// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 3;
let listaAsteristicos = [];
listaAsteristicos.push('*');
let listaVazia = [];
let tamanhoDaBase = 0;
listaAsteristicos.join('')
for(let indice = n-1; indice > 0; indice -= 1){ 
    listaVazia.push(" ");
}
for(let indice = 1; indice <= 2; indice ++){ // Imprime as 2 primeiras linhas da piramide
    console.log(listaVazia.join('') + listaAsteristicos.join(''));
    listaVazia.pop();
    listaAsteristicos.push('**');
}
if(n > 2){
    for(let indice = 3; indice <= n; indice ++){
    tamanhoDaBase = indice + Math.pow(2,n-2);
        if(indice % 2 == 0){
            listaAsteristicos = [''];
                for(let i = ((tamanhoDaBase - 1) / 2); i <= indice; i += 1){ // Constroi uma lista de asteristicos com tamanho equivalente a (linhaDapiramide-1)/2
                    listaAsteristicos.push('*');
                }
                listaVazia.pop();
                console.log(listaVazia.join('') + listaAsteristicos.join('') + " " + listaAsteristicos.join(''));
        }
        else{ // Construi uma lista de asteristicos com o (tamanho da linha interior + 2) e preenche o espaço vazio
            listaVazia.pop();
            listaAsteristicos.push('*');
            console.log(listaVazia.join('') + listaAsteristicos.join('') + "*" + listaAsteristicos.join(''));
        }
    }
}
else{}