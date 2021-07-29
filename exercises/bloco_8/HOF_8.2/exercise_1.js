const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  return books.find(func = (objeto) => objeto.author.birthYear === 1947 ).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
// Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  //let variavel = books.forEach( func = (objeto) => { if ( nameBook.length > objeto.name.length ) {(nameBook = objeto.name)};})
  books.forEach( func = (objeto) => ( nameBook.length > objeto.name.length ? nameBook = objeto.name : 'Do Nothing'));
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');  
// Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find(func = (objeto) => objeto.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

// Ordene os livros por data de lançamento em ordem decrescente.
const expectedResulte = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((objeto1, objeto2) => objeto2.releaseYear - objeto1.releaseYear);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResulte);

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResulter = true;

function everyoneWasBornOnSecXX() {
  return books.some(func = (objeto) => (objeto.releaseYear >= 1980 && objeto.releaseYear < 1990));
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResulter);

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResul = false;

function authorUnique() {
  let array = [];
  books.forEach(func = (objeto) => array.push(objeto.author.birthYear));
  return books.some(func = (objeto) => { ( array.some( func = (data) => {data === objeto.author.birthYear }) ) === true });
}

assert.strictEqual(authorUnique(), expectedResul);