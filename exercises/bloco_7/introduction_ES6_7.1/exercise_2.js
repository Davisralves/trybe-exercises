/*// 1. Crie uma função que receba um número e retorne seu fatorial.
const factorial = num => {
  for (let index = num - 1; index > 0; index -= 1) { //testar for (let index of num)
    num *= index;
  }
  return num;
}
console.log(factorial(10)); */
/*
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}

// fazendo fatorial em uma linha :
let factorial = x => x === 0 ? 1 : x * factorial(x-1)
console.log(factorial(5));*/
/*
let fatorial = num => { num > 2 ? num *= num-1: num;}
console.log(fatorial(10)); */


// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

/*string = "Antônio foi no banheiro e não sabemos o que aconteceu"
const maiorPalavra = string => {
  let array = string.split(" ");
  let maiorPalavra = "";
  for(let palavra of array) {
    palavra.length > maiorPalavra.length ? maiorPalavra = palavra : console.log;
  }
  return maiorPalavra;
}
console.log(maiorPalavra(string)); */

// 3.