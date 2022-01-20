const { isCepValid } = require("../middlewares/validateCep");

const { searchCep } = require("../services/cep");

const validateCep = async (req, res) => {
	const { cep } = req.params;

	if (!isCepValid(cep))
		return res
			.status(400)
			.json({ error: { code: "invalidData", message: "CEP inválido" } });

	const { error, cep: cepObject } = await searchCep(cep);

	if (error) return res.status(404).json(error);

	res.json(cepObject);
};

module.exports = {
	validateCep,
};
