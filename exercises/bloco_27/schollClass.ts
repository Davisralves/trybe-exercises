let arrayDe6Numeros: [number, number, number, number, number, number]

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

