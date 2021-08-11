const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const array = products.map(func = (produto, index) => ( { [produto]: prices[index],} ));
  console.log(array);