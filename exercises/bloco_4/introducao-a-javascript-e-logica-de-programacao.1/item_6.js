let peca = "rei";
peca = peca.toLowerCase();

if(peca == "peao"){
    console.log("se move para 1 local adjacente");
}
else if(peca =="cavalo"){
    console.log("se move duas vezes na vertical e uma na horizontal");
}
else if(peca =="bispo"){
    console.log("se move na diagonal.");
}
else if(peca =="torre"){
    console.log("se move na vertical ou horizontal.");
}
else if(peca == "rei"){
    console.log("se move para qualquer direção a 1 casa de distancia");
}
else if(peca == "rainha"){
    console.log("se move na vertical ou horizontal");
}
else{
    console.log("peça invalida.")
}