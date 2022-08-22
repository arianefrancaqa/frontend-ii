let input1 = document.getElementById('urlImagem1')
let input2 = document.getElementById('urlImagem2')
let input3 = document.getElementById('urlImagem3')
let divGaleria = document.getElementById('galeria')

//let inputs = document.querySelectorAll("input[disabled]")
// TODO: apos enviar a imagem, limpar o input
// TODO: quando estiver disabled altere o CSS
function clickEnviar() {
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)

    ganhouFocoInput()

    let urlImg1 = document.createElement("img")
    urlImg1.src = input1.value
    divGaleria.appendChild(urlImg1)

    let urlImg2 = document.createElement("img")
    urlImg2.src = input2.value
    divGaleria.appendChild(urlImg2)

    let urlImg3 = document.createElement("img")
    urlImg3.src = input3.value
    divGaleria.appendChild(urlImg3)

    if(input1.value != ""){
        input1.style.backgroundColor = "red";
    }else()
    
}

function perdeuFocoInput() {
    // input1.setAttribute("disabled", true)
    input1.disabled = true
    input2.disabled = true
    input3.disabled = true
}

function ganhouFocoInput() {
    // input1.removeAttribute("disabled")
    input1.disabled = false
    input2.disabled = false
    input3.disabled = false
}

function marcaCampoVermelho(){
    input1.style.color = "red";
    input2.style.color = "red";
    input3.style.color = "red";
}
