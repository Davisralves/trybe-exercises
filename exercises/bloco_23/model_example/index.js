const express = require("express");

const Author = require("./models/Author");

const Books = require("./models/books");

const app = express();

app.get("/authors", async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get("/books", async (_req, res) => {
	const books = await Books.getAll();
	res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
	const { id } = req.query;
	const books = await Books.getByAuthorId(id);
  console.log(books);
  if (!books || books.length === 0) return res.status(404).json({ message: 'Not found' });
	res.status(200).json(books);
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
