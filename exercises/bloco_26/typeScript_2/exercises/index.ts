export enum Color {
  preta = "Black",
  branco= "White",
  vermelho= "Red",
  prata= "Silver",
}

export class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors:number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log("Carro Buzinando !")
  }

  openTheDor(porta: number): void {
    console.log(`Abrindo porta ${porta}`);
  }

  closeTheDor(porta: number): void {
    console.log(`fechando porta ${porta}`);
  }

  turnOn(): void {
    console.log('Carro ligado')
  }

  turnOf(): void {
    console.log('Carro desligado')
  }

  speedUp(): void {
    console.log('acelera carro')
  }

  speedDown(): void {
    console.log('Freia carro')
  }

  stop(): void {
    console.log('Carro Parou')
  }

  turn(turn: string) {
    console.log(`carro virando para ${turn}`)
  }
}