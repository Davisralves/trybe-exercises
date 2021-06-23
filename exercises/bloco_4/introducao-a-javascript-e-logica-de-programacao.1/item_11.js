let salarioBruto = 1500;
let inss = 0;
let ir = 0;
let salarioLiquido = 0;

if(salarioBruto < 0){
    console.log("Valor invalido");
    return ;
}
console.log("Salario liquido é:");

if(salarioBruto <= 1.556,94 ){
    inss = salarioBruto * 0.08;
    salarioLiquido = salarioBruto - inss;
    console.log(salarioLiquido)
}
else if(salarioBruto <= 1.903,98){
    inss = salarioBruto * 0.09;
    salarioLiquido = salarioBruto - inss;
    console.log(salarioLiquido)
}