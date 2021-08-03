// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['facas', 'copos', 'talheres'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));