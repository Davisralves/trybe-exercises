//1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//2. insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
// 
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  console.log('Bem-vinda ' + info.personagem);
  console.log(info);
  // 3 Faça um for/in que mostre todas as chaves do objeto.
  for(let chaves in info){
      console.log(chaves);
  }

// 4 .Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let chaves in info){
    console.log(info[chaves]);
}
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let tio = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for (let chave in info){
    console.log(info[chave] + " e "+ tio[chave]);

}
