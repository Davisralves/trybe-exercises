const {question, questionFloat} = require("readline-sync")

const askWeight = () => question("Qual seu peso ?");
const askHeight = () => questionFloat("Qual sua Altura ?");

module.exports = {
  askHeight, 
  askWeight,
}