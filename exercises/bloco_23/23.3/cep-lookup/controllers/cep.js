const { isCepValid } = require("../middlewares/validateCep");

const { searchCep } = require("../services/cep");

const Joi = require("joi");

const validateCep = async (req, res) => {
	const { cep: cepParams } = req.params;
  console.log(req.body);
  const cepBody = req.body;
  const cep = cepParams || cepBody;
  console.log(cep);
	if (!isCepValid(cep))
		return res
			.status(400)
			.json({ error: { code: "invalidData", message: "CEP inválido" } });

	const { error, cepObject } = await searchCep(cep);

	if (error) return res.status(404).json(error);

	res.json(cepObject);
};

const validateBody = async (req, res, next) => {
  console.log(req.body);
	const { cep, logradouro, bairro, localidade, uf } = req.body;
	const { error } = Joi.object({
		cep: Joi.string().not().empty().required(),
		logradouro: Joi.string().not().empty().required(),
		bairro: Joi.string().not().empty().required(),
		localidade: Joi.string().not().empty().required(),
		uf: Joi.string().not().empty().required(),
	}).validate({ cep, logradouro, bairro, localidade, uf });
  if(error) {
    return next(error)
  }
  // const newLocal = await createLocal(cep, logradouro, bairro, localidade, uf);
  return res.status(201).json({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
	validateCep,
  validateBody,
};
