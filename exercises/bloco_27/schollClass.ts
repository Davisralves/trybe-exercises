let arrayDe6Numeros: [number, number, number, number, number, number]

abstract class Person {
  constructor(protected _name: string, protected _birthName: string) {}
  abstract get name(): string;
  abstract get birthName(): string; 
}

// const person1 = new Person('josé', '29/06/1997');
// const person2 = new Person('Kiko', '29/06/1800');

// console.log(person1.name)
// console.log(person1.birthName)
// console.log(person2.name)
// console.log(person2.birthName)



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

  get name() {
      if(this._name.length >= 3) {
        return this._name
      } return 'Nome precisa ter pelo menos 3 caracteres'
    }

  get birthName() {
    const regex = /\d\d\/\d\d\/\d\d\d\d/
    if(regex.test(this._birthName) && parseInt(this._birthName.slice(6)) >= 1902) {
      return this._birthName
    } return 'Data invalida'
  }  
}
const notas: typeof arrayDe6Numeros = [7, 7, 7, 8, 8, 8];
const estudante = new Estudante('Di', '29/06/197', '92e1y92178y912', notas) ;
console.log(estudante.name, estudante.birthName, estudante.somaDasNotas(), estudante.calculaMedia())

