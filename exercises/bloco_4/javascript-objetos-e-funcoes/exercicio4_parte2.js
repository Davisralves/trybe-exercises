// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(array){
    let maior = '';
    for(let nome of array){
        if(nome.length > maior.length){
            maior = nome;
        }
    }
    return maior;
}
console.log(maiorNome(array));
