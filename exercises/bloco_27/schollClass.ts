let arrayDe6Numeros: [number, number, number, number, number, number]

class person {
  name: string;
  birthName: string;
  constructor(name: string, birthName: string) {
    if(name.length >= 3) {
      this.name = name
    }
    const regex = /\d\d\/\d\d\/\d\d\d\d/
    console.log(regex.test(birthName), parseInt(birthName.slice(6)))
    if(regex.test(birthName) && parseInt(birthName.slice(6)) >= 1902) {
      this.birthName = birthName;
    }
  }
}

const person1 = new person('josé', '29/06/1997');
const person2 = new person('Kiko', '29/06/1800');

console.log(person1.name)
console.log(person1.birthName)
console.log(person2.name)
console.log(person2.birthName)



class Estudante {
  matricula: string;
  nome: string;
  notas: typeof arrayDe6Numeros;

  constructor(matricula: string, nome: string, notas: typeof arrayDe6Numeros) {
    this.matricula = matricula;
    this.nome = nome;
    this.notas = notas;
  }

  somaDasNotas (): number {
    return this.notas.reduce((acumulador, nota) => acumulador + nota);
  }

  calculaMedia (): number {
    return this.somaDasNotas() / 6
  }
}
const notas: typeof arrayDe6Numeros = [7, 7, 7, 8, 8, 8];
const estudante = new Estudante('siajdj209jdqoi', 'Davi', notas );
console.log(estudante.nome, estudante.somaDasNotas(), estudante.calculaMedia())

