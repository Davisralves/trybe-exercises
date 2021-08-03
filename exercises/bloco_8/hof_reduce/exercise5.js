const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((counter, string) =>  string.toUpperCase().match(/A/g) !== null ? counter + string.toUpperCase().match(/A/g).length : counter, 0);
}

assert.deepStrictEqual(containsA(), 20);