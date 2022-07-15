const { findcep } = require("../models/cep");

const searchCep = async (cep) => {
	const cepObject = await findcep(cep);
	if (!cepObject) {
		return { error: { code: "notFound", message: "CEP não encontrado" } };
	}
	return {cepObject};
};

module.exports = {
  searchCep,
}