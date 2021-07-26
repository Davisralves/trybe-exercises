const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  let objeto = Object.values(array);
  for(let index = 0; index < array.lenght; index += 1) {
    objeto[index] = objeto[index].length;
  }
  console.log(objeto);
  return objeto;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
//assert.deepStrictEqual(output, expected);