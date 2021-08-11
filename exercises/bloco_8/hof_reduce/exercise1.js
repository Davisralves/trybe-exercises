const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, current) => {
    acc + current.map((objeto) => acc.push(objeto));
    return acc;
  }, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);