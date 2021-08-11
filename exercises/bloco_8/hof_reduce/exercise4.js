const books = require('/home/davi/Git/trybe-exercises/exercises/bloco_8/hof_reduce/exercise2.js');
const assert = require('assert');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((biggerBook, object) =>  biggerBook.name.length > object.name.length ? biggerBook : object);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);