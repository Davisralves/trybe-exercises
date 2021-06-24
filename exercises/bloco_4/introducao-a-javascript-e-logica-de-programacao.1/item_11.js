let salarioBruto = 10000;
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
}
else if(salarioBruto <= 1.903,98){
    inss = salarioBruto * 0.09;
    salarioLiquido = salarioBruto - inss;
}
else if(salarioBruto <= 2594,93) {
    inss = salarioBruto * 0,09;
    ir = ((salarioBruto -inss) * 0.075) - 142,80;
    salarioLiquido = salarioBruto - (inss + ir);
}
else if(salarioBruto <= 5.189,82){
    inss = salarioBruto *0.11;
    if(salarioBruto-inss <= 2.826,65){
        ir = ((salarioBruto -inss) * 0.075) - 142,80;
    }
    else if(salarioBruto-inss <= 3.751,05){
        ir = ((salarioBruto -inss) * 0.15) - 354,80;
    }
    else if((salarioBruto-inss) <= 4.664,68){
        ir = ((salarioBruto -inss) * 0.225) - 636,13;
    }
    salarioLiquido = salarioBruto - (inss + ir);
}
else if(salarioBruto > 5.189,82){
    inss = salarioBruto - 570,88;
    if((salarioBruto-inss) <= 4.664,68){
        ir = ((salarioBruto -inss) * 0.225) - 636,13;
    }
    else {
        ir = ((salarioBruto -inss) * 0.275) - 869,36;
    }
    salarioLiquido = salarioBruto - (inss + ir)
}

console.log(salarioLiquido);