let custo = 10;
let valorVenda = 20;
if(custo < 0 || valorVenda < 0){
    console.log("Valor invalido.");
    return ;
}
let valorCustoTotal = custo*1.2;
let lucro = valorVenda - valorCustoTotal; 
console.log("O lucro da venda dos 1.000 produtos é:");
console.log(lucro*1000);