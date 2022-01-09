const {imc, imcTable} = require("./lib/imc");
const { askWeight, askHeight } = require("./lib/questions");
const c = require('print-colors');

const weight = askWeight();
const height = askHeight();

console.log(`Seu IMC é ${imc(height, weight).toFixed(2)}`);
console.log(imcTable(imc(height, weight)));
