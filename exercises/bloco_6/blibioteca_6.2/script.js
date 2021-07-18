function gerarEstados (){
  let select = document.querySelector('select');
  let estado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'] ;
  for (let index = 0; index < 27; index += 1){
    let option = document.createElement('option');
    option.innerText = estado[index];
    select.appendChild(option);
  }
}

function submmit(event) {
  event.preventDefault();
  console.log(event);
}


gerarEstados();
let button = document.querySelector('button');
button.addEventListener('click', submmit);

