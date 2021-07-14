function gerarEstados (){
  let select = document.querySelector('select');
  let estado = '';
  for (let index = 0; index <= 27; index += 1){
    estado = 'estado' + index;
    let option = document.createElement('option');
    option.innerText = estado;
    select.appendChild(option);
  }
}
gerarEstados();
