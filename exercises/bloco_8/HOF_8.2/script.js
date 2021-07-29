/*
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find(func = (number) =>  number % 5 === 0 && number % 3 === 0);

console.log(findDivisibleBy3And5()); */

/*
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find(func = (name) => name.length >= 5);

console.log(findNameWithFiveLetters()); */

// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
/*
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
return musicas.find(func = (music) => music.id === id );
}

console.log(findMusic('31031686')); */
/*
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(func = (nome) => nome === name );
}

console.log(hasName(names, 'Ana')) */
// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
/*
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 17 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every(func = (objeto) => objeto.age >= minimumAge);
}

console.log(verifyAges(people, 18)); */
// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((objeto,objeto2) => objeto2.age - objeto.age);
// people.sort(func = (objeto, index, objetoInteiro) => objeto.age - objetoInteiro[index+1].age );
console.log(people);