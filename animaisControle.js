let listaDeAnimais = [];

function botaoInserir(){
    const especieAnimal = document.getElementById("inputEspecie").value;
    const generoAnimal = document.getElementById("inputGenero").value;
    const corAnimal = document.getElementById("inputCor").value;
    const idadeAnimal = document.getElementById("inputIdade").value;
    const nivelPerigoAnimal = document.getElementById("inputNivelPerigo").value;
    const tipoAlimentoAnimal = document.getElementById("inputTipoAlimento").value;
    const familiaAnimal = document.getElementById("inputFamilia").value;
    const habitatAnimal = document.getElementById("inputHabitat").value;
    let animal = new Animal(especieAnimal, generoAnimal, corAnimal, idadeAnimal, nivelPerigoAnimal, tipoAlimentoAnimal, familiaAnimal, habitatAnimal);
    listaDeAnimais.push(animal);

}

function botaoListar(){
    let saida = document.getElementById("outputListaDeAnimais");
    saida.innerHTML = "";
    for(let i = 0; i < listaDeAnimais.length; i++){
        let f = listaDeAnimais[i];
        saida.innerHTML +=
        (i + 1) + "º - " +
        f.especie + " - " +
        f.genero + " - " +
        f.cor + " - " +
        f.idade + " - " +
        f.nivelPerigo + " - " +
        f.tipoAlimento + " - " +
        f.familia + " - " +
        f.habitat +
         "<br>";

    }

}
