window.addEventListener("load", function () {
    let inputTitulo = document.getElementById("tituloPost");
    let inputDescricao = document.getElementById("descricaoPost");
    let inputUrl = document.getElementById("urlImagemPost");
    let buttonSubmit = document.getElementById("submitButton");
    let divPostReceitas = document.getElementById("cards");

    function addReceitaNaTela(titulo, descricao, urlImagem) {
        let item
        let itemCardDiv = document.createElement("div");
        itemCardDiv.classList.add(item);

        let imagem = document.createElement("img");
        imagem.src = urlImagem;

        let tituloH2 = document.createElement("h2");
        tituloH2.innerHTML = titulo;

        let descricaoP = document.createElement("p");
        descricaoP.innerHTML = descricao;

        itemCardDiv.appendChild(imagem);
        itemCardDiv.appendChild(tituloH2);
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
