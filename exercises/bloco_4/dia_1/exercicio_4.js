let situacao;
situacao = "faltou";
switch(situacao){
    case "aprovado":
    console.log("aprovado !!!");
    break;

    case "lista":
        console.log("lista de espera");
        break;
    
    case "reprovado":
        console.log("Reprovado :(");
        break;
    
    default:
        console.log("Não se aplica.")    
}