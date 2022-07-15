const getNumberSignal = (number) => {
	if (typeof number !== "number") return "Valor precisa ser um número";
	if (number > 0) return "Positivo";
	if (number < 0) return "Negativo";
	if (number === 0) return "Neutro";
};

module.exports = {
	getNumberSignal,
};
