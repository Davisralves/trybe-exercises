let alfa = 90;
let beta = 45;
let gama = 45;

if(alfa < 0 || beta < 0 || gama < 0){
    console.log("Angulo invalido.");
}

else if((alfa+beta+gama) == 180){
    return true;
}
else{
    return false;
}

