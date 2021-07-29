const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4, 5);
const soma0 = sum(0, 0);
assert.deepStrictEqual(expected, 9, '4 + 5 = 9');
assert.deepStrictEqual(soma0, 0, 'O valor deve ser 0');