const imc = (altura, peso) => peso / altura ** 2;
const c = require('print-colors');
const greenInit = c.foreground.light.green;
const greenEnd = c.end;
const getImcIndex = (imc) => {
  if(imc < 18.5) return 0;
  if(imc >= 18.5 && imc <= 24.9) return 1;
  if(imc > 24.9 && imc <= 29.9) return 2;
  if(imc > 29.9 && imc <= 34.9) return 3;
  if(imc > 34.9 && imc <= 39.9) return 4;
  if(imc > 39.9) return 5;
};

const IndexInit = ['','','','','']; // é possivel fazer utilizandoa array em vez de 5 variaveis

const imcTable = (imc) => {
  const imcIndex = getImcIndex(imc);
  const index0Init = imcIndex === 0 ? greenInit : '';
  const index0End = imcIndex === 0 ? greenEnd : '';
  
  const index1Init = imcIndex === 1 ? greenInit : '';
  const index1End = imcIndex === 1 ? greenEnd : '';
  
  const index2Init = imcIndex === 2 ? greenInit : '';
  const index2End = imcIndex === 2 ? greenEnd : '';
  
  const index3Init = imcIndex === 3 ? greenInit : '';
  const index3End = imcIndex === 3 ? greenEnd : '';
  
  const index4Init = imcIndex === 4 ? greenInit : '';
  const index4End = imcIndex === 4 ? greenEnd : '';
  
  const index5Init = imcIndex === 5 ? greenInit : '';
  const index5End = imcIndex === 5 ? greenEnd : '';

  return `
  | IMC                                       | Situação                 |
  | ----------------------------------------- | ------------------------- |
  ${index0Init}| Abaixo de 18,5                            | Abaixo do peso (magreza)  |${index0End}
  ${index1Init}| Entre 18,5 e 24,9                         | Peso normal               |${index1End}
  ${index2Init}| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |${index2End}
  ${index3Init}| Entre 30,0 e 34,9                         | Obesidade grau I          |${index3End}
  ${index4Init}| Entre 35,0 e 39,9                         | Obesidade grau II         |${index4End}
  ${index5Init}| 40,0 e acima                              | Obesidade graus III e IV  |${index5End}
  `
}


module.exports = {
  imc,
  imcTable,
};