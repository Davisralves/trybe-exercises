// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
let palavra = 'arara';
function palindromo(palavra){
    let palavraInversa = palavra.split('').reverse().join('');
    if(palavra == palavraInversa){
        return "É um palindromo"
    }
    else{
        return "Não é um palindromo"
    }
}
let resposta = palindromo(palavra);
console.log(resposta);