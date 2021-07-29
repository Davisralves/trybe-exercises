const sorteio = (valor, func) => {
  func() === valor ? console.log("Tente novamente") : console.log("Parabéns você ganhou");
}
const sortear = () => Math.floor(Math.random() * 4) + 1;
sorteio(1, sortear);