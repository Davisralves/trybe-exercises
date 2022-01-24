const express = require("express");

require("dotenv").config();

var bodyParser = require('body-parser')

const app = express();

const ping = require("./controllers/ping");

const { validateCep } = require("./controllers/cep");

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/ping", ping);

app.get("/cep/:cep", validateCep);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
