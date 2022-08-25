window.addEventListener("load", function () {
  let inputTitulo = document.getElementById("tituloPost");
  let inputDescricao = document.getElementById("descricaoPost");
  let inputUrl = document.getElementById("urlImagemPost");
  let buttonSubmit = document.getElementById("submitButton");
  let form = document.querySelector("form");

  function transformaData() {
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let dataFormatada = dia + "/" + mes + "/" + ano;

    return `Post criado dia ${dataFormatada}
    às ${hora}:${minutos}`;
  }

  function addReceitaNaTela(titulo, descricao, urlImagem) {
    let item = "item";
    let itemCardDiv = document.createElement("div");
    itemCardDiv.classList.add(item);

    let imagem = document.createElement("img");
    imagem.src = urlImagem;

    let tituloH3 = document.createElement("h3");
    tituloH3.innerHTML = titulo;

    let descricaoP = document.createElement("p");
    descricaoP.innerHTML = descricao;

    let dataDoPost = document.createElement("p");
    dataDoPost.setAttribute("class", "dataP")
    dataDoPost.innerHTML = transformaData();

    itemCardDiv.appendChild(imagem);
    itemCardDiv.appendChild(tituloH3);
    itemCardDiv.appendChild(descricaoP);
    itemCardDiv.appendChild(dataDoPost);
    
    document.getElementById("cards").appendChild(itemCardDiv);
  }

  buttonSubmit.addEventListener("click", function (e) {
    let listaInfosReceitas = [
      {
        title: inputTitulo.value,
        imgUrl: inputUrl.value,
        description: inputDescricao.value.replace(/\r?\n/g, "<br>"),
      },
    ];

    listaInfosReceitas.forEach((element) => {
      addReceitaNaTela(element.title, element.description, element.imgUrl);
    });

    for (const element of form) {
      element.value = "";
    }
    e.preventDefault();
  });
});
