class student {
  matricula: string;
  nome: string;
  notas: [number, number, number, number, number, number];

  somaDasNotas (): number {
    return this.notas.reduce((acumulador, nota) => acumulador + nota);
  }

  calculaMedia (): number {
    return this.somaDasNotas() / 6
  }
}

  