const wakeUp = () => 'acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';
const doingThings = (func) => {
  console.log(func());
}

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(cafe);
doingThings(dormir);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!