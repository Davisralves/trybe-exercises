
let azul = document.querySelector('#azul');
let verde = document.querySelector('#verde');
let vermelho = document.querySelector('#vermelho');
let body = document.querySelector('body');


let cor = 'azul';

function mudaCor(){
        body.style.backgroundColor = 'azul';
        console.log('funcionou');
    }


azul.addEventListener('click', mudaCor());