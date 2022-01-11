const fs = require('fs');

const content = fs.promises.readFile('./hello.txt', {encoding: 'utf-8'}, 
  (resolve) => resolve);

  const getContent = async () => {
    const valor = await content
    console.log(valor);
  };
  getContent();
console.log(content);