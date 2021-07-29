const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; 

const notaEstudante = (respostas, respostaDoEstudante, nota) => console.log(valor(respostas, respostaDoEstudante));

const valor = (respostas, respostaDoEstudante) => {
  let nota = 0;
  for (let index = 0; index < respostas.length; index += 1) {
    if(respostaDoEstudante[index] === 'N.A'){

    } else if(respostaDoEstudante[index] === respostas[index]) {
      nota += 1;
    } else { nota -= 0.5}
  }
  return nota;
}
notaEstudante(RIGHT_ANSWERS, STUDENT_ANSWERS);
console.log(1+0+1+1+1-0.5+0+1+1-0.5)