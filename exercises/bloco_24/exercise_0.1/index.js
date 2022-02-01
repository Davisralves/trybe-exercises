require('dotenv').config();

const express = require('express');

const app = express();

const { Book } = require('./models');

app.use(express.json());


app.get('/books', (req, res) => {
  const books = Book.findAll();
  return res.status(200).json(books);
})

app.listen(process.env.PORT, () => {
  console.log('Servidor rodando na porta', process.env.PORT)
})
