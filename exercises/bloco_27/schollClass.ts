let arrayDe6Numeros: [number, number, number, number, number, number]

class Person {
  constructor(protected _name: string, protected _birthName: string) {
    // const regex = /\d\d\/\d\d\/\d\d\d\d/
    // console.log(regex.test(birthName), parseInt(birthName.slice(6)))
    // if(regex.test(birthName) && parseInt(birthName.slice(6)) >= 1902) {
    //   this._birthName = _birthName;
    // }
  }

  get name() {
    if(this._name.length >= 3) {
      return this._name
    } return 'Nome precisa ter pelo menos 3 caracteres'
  }

  get birthName() {
    return this._birthName
  }
}

const person1 = new Person('josé', '29/06/1997');
const person2 = new Person('Kiko', '29/06/1800');

console.log(person1.name)
console.log(person1.birthName)
console.log(person2.name)
console.log(person2.birthName)



class Estudante extends Person{

  constructor(protected _name: string, protected _birthName: string, public matricula: string, public notas: typeof arrayDe6Numeros, ) {
    super(_name, _birthName);
  }

  somaDasNotas (): number {
    return this.notas.reduce((acumulador, nota) => acumulador + nota);
  }

  calculaMedia (): number {
    return this.somaDasNotas() / 6
  }
}
const notas: typeof arrayDe6Numeros = [7, 7, 7, 8, 8, 8];
const estudante = new Estudante('Di', '29/06/1997', '92e1y92178y912', notas) ;
console.log(estudante.name, estudante.birthName, estudante.somaDasNotas(), estudante.calculaMedia())

