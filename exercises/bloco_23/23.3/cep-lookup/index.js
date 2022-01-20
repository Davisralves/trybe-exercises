const express = require("express");

require("dotenv").config();

const app = express();

const ping = require("./controllers/ping");

const { validateCep } = require("./controllers/cep");

const PORT = process.env.PORT;

app.get("/ping", ping);

app.get("/cep/:cep", validateCep);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
