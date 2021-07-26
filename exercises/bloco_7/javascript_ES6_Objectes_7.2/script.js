//crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const addKey = (object, chave, valor) => object[chave] = valor;
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
addKey(customer, 'sobrenome', 'Alves');
console.log(customer);
  
