/* // parte 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
 // Se necessário esta linha pode ser removida.
}

testingScope(true);  */

// parte 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os numeros ${oddsAndEvens.sort(crescentOrder = (a, b) => (a - b))} se encontram ordenados de forma crescente!`);