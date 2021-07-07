function minhaHistoria(text){
for (let index in document.getElementsByTagName('p')){
document.getElementsByTagName('p')[index].innerText = text;
}
}
minhaHistoria("minha historia de vida");
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaEscript";

for(let index in document.getElementsByTagName("p")){
    textMaiusculo = document.getElementsByTagName("p")[0].innerText.toUpperCase();
    document.getElementsByTagName("p")[index].innerText = textMaiusculo;
}
for(let index in document.getElementsByTagName("p")){
    console.log(document.getElementsByTagName("p")[index]);
}
