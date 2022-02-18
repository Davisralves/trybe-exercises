enum diasDaSemana  {
  domingo = 1,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
}
console.log(diasDaSemana);

enum pontosCardiais {
  norte = "N",
  sul = "S",
  leste = "L",
  oeste = "O",
}
console.log(pontosCardiais.norte, pontosCardiais);


type values = {
  one: number,
  two: number,
}

const sum = (v: values) => v.one + v.two;

console.log(sum({one: 1, two: 2}))

class Dog {
  name: string;
  age: number;
  color: string;

    constructor(name: string, age: number, color: string) {
      this.name = name
      this.age = age
      this.color = color
    }
}

const dog1 = new Dog('kika', 10, 'preto');
const dog2 = new Dog('sofia', 8, 'cinza');

console.log(dog1, dog2);