module.exports = {
  isCepValid: (cep) => {
    const regex = /\d{5}-?\d{3}/;
    return regex.test(cep);
  }
}