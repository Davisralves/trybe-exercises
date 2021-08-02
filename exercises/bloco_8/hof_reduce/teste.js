const mapper = (acc, current) => {
  acc + current.map((objeto) => acc.push(objeto));
  return acc;
}

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

console.log(arrays.reduce(mapper, []));