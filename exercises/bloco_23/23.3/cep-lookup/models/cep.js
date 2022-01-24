const fetch = require('node-fetch');

const findcep = async (cep) => {
  const request = await fetch('https://viacep.com.br/ws/01001000/json/');
  console.log(request.Response, 'models');
  return request;
};

module.exports = {
  findcep,
};