const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

// 2.
function handleChangeTech(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }
firstDiv.addEventListener('click', handleChangeTech);
secondDiv.addEventListener('click', handleChangeTech);
thirdDiv.addEventListener('click', handleChangeTech);

// 3.
let kika = input.addEventListener('input', evento)
function evento(input){
    let  texto = document.querySelector('.tech');
        texto.innerText = input.target.value;
        console.log('digitou') ;  
}
// 4.
function createA() {
  let h3 = document.querySelector('h3');
  h3.innerText = '';
  let a = document.createElement('a');
  h3.appendChild(a);
  a = document.querySelector('a');
  a.innerText = ' Meu top 3 do Spotrybefy';
  a.target = '_blank'
  a.href = 'https://www.linkedin.com/feed/';
}
let h3 = document.querySelector('h3');
h3.addEventListener('click',createA);
/* myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
}); */

// 5.
myWebpage.addEventListener('mouseover', function() {
  myWebpage.style.color = 'blue'
});
