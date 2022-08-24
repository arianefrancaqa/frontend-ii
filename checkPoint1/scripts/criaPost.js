window.addEventListener("load", function () {
    let inputTitulo = document.getElementById("tituloPost");
    let inputDescricao = document.getElementById("descricaoPost");
    let inputUrl = document.getElementById("urlImagemPost");
    let buttonSubmit = document.getElementById("submitButton");
    let divPostReceitas = document.getElementById("cards");

    let form = document.querySelector("form")

    form.addEventListener("submit", (evento) =>{
        evento.preventDefault()

        console.log("form enviado")
    })

    function addReceitaNaTela(titulo, descricao, urlImagem) {
        let item = "item"
        let itemCardDiv = document.createElement("div");
        itemCardDiv.classList.add(item);

        let imagem = document.createElement("img");
        imagem.src = urlImagem;

        let tituloH3 = document.createElement("h3");
        tituloH3.innerHTML = titulo;

        let descricaoP = document.createElement("p");
        descricaoP.innerHTML = descricao;

        itemCardDiv.appendChild(imagem);
        itemCardDiv.appendChild(tituloH3);
        itemCardDiv.appendChild(descricaoP);

        document.getElementById("cards").appendChild(itemCardDiv);
    }

    buttonSubmit.addEventListener("click", function (e) {
        let listaInfosReceitas = [
            {
                title: inputTitulo.value,
                imgUrl: inputUrl.value,
                description: inputDescricao.value,
            },
        ];
        listaInfosReceitas.forEach(element => {
            addReceitaNaTela(
                element.title,
                element.description,
                element.imgUrl
            );
        });
        e.preventDefault();
    });
});
