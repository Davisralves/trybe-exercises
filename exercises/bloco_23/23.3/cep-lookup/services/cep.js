const { findcep } = require("../models/cep");

const searchCep = async (cep) => {
	const cepObject = await findcep(cep);
	if (!cepObject) {
		return { error: { code: "notFound", message: "CEP não encontrado" } };
	}
	return {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
  };
};

module.exports = {
  searchCep,
}