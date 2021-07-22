 /*// 1. Crie uma função que receba um número e retorne seu fatorial.
const factorial = num => {
  for (let index = num - 1; index > 0; index -= 1) { testar for (let index of num)
    num *= index;
  }
  return num;
}
console.log(factorial(10)); */

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

string = "Antônio foi no banheiro e não sabemos o que aconteceu"
const maiorPalavra = string => {
  let array = string.split(" ");
  let maiorPalavra = "";
  for(let palavra of array) {
    palavra.length > maiorPalavra.length ? maiorPalavra = palavra : console.log;
  }
  return maiorPalavra;
}
console.log(maiorPalavra(string));