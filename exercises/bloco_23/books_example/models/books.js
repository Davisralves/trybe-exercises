const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;'
  );
  return books.map((title) => ({title}) );
}

module.exports = {
  getAll,
}