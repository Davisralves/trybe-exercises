function comparandoAlturas(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2) {

    alturaDoMaior = 0
    alturaDoMenor = 0
    taxaDoMaior = 0
    taxaDoMenor = 0
    anosAteCrescer = 0

    if (altura1 > altura2 && taxaDeCrescimento2 > taxaDeCrescimento1) {
        alturaDoMaior = altura1
        taxaDoMaior = taxaDeCrescimento1
        alturaDoMenor = altura2
        taxaDoMenor = taxaDeCrescimento2

    } else if (altura2 > altura1) {
        alturaDoMaior = altura2
        taxaDoMaior = taxaDeCrescimento2
        alturaDoMenor = altura1
        taxaDoMenor = taxaDeCrescimento1

    } else {
        console.log("As alturas são iguais.")
    }

    while (alturaDoMaior >= alturaDoMenor) {
        console.log(alturaDoMaior, alturaDoMenor)
        alturaDoMaior += taxaDoMaior
        alturaDoMenor += taxaDoMenor
        anosAteCrescer++
    }

    console.log(anosAteCrescer,'ano(s)')
}

comparandoAlturas(1.2, 0.1, 1.3, 0.05)