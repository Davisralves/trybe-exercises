const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;'
  );
  return books.map((title) => ({title}) );
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books WHERE id=${id}`
  );
  return books.map((title) => title)
}

module.exports = {
  getAll,
  getByAuthorId,
}