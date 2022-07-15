const fetch = require('node-fetch');

const findcep = async (cep) => {
  const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const findCep = await request.json(); // .json() ?
  if(findCep.erro) {
    return false;
  }
  return findCep;
};

module.exports = {
  findcep,
};