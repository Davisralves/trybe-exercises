const { writeFileSync } = require('fs');

const writeInFile = (arquivo, conteudo) => {
  try {
    return writeFileSync(arquivo, conteudo);
  } catch(err) {
    return "Arquivo não existe";
  }
}


module.exports = {
	writeInFile,
};
