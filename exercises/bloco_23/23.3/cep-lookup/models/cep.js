const connection = require('./connection');

const findcep = async (cep) => {
  console.log(process.env.MYSQL_DB_NAME);
  const [cepObject] = await connection.execute(`SELECT * FROM ceps WHERE cep=${cep}`);
  return cepObject;
};

module.exports = {
  findcep,
};