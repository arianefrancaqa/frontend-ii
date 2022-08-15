let buttonDarkMode = document.getElementById("buttonDarkMode");

let body = document.body;
let barraMenu = document.getElementById("barra-menu");
let cardList = document.querySelectorAll(".item");
const listaDeFelinos = [
  {
    title: "Tigre",
    imgUrl: "./imagens/tiger.jpg",
    description:
      "O tigre (Panthera tigris) é uma das espécies da subfamília pantherine (família Felidae) pertencente ao gênero Panthera. Encontra-se apenas no continente asiático; É um predador carnívoro e é a maior espécie de felídeo do mundo, juntamente com o leão, ambos podem atingir um tamanho comparável ao de fósseis de felinos maiores.",
    createdAt: "2021-06-01T23:12:11.837Z",
  },
  {
    title: "Leão",
    imgUrl: "./imagens/leon.jpg",
    description:
      "O leão (Panthera leo) é um mamífero carnívoro da família Felidae e uma das cinco espécies do gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsaariana (exceto nas regiões de selva da costa atlântica e na bacia do Congo) e em uma pequena área do noroeste da Índia.",
    createdAt: "2021-05-05T23:12:11.837Z",
  },
  {
    title: "Leopardo",
    imgUrl: "./imagens/leopardo.jpg",
    description:
      "O leopardo (Panthera pardus) é um mamífero carnívoro da família Felidae. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça, eles são caracterizados por uma modificação no osso hióide que lhes permite rugir. Também é conhecida como a pantera marrom e, quando tem a pelagem completamente escura, como a pantera negra (melanística).",
    createdAt: "2021-05-05T23:12:11.837Z",
  },
  {
    title: "Pantera negra",
    imgUrl: "./imagens/pantera-negra.jpg",
    description:
      "A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, especialmente o leopardo (Panthera pardus) e a onça (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.",
    createdAt: "2021-04-09T23:12:11.837Z",
  },
  {
    title: "Jaguar",
    imgUrl: "./imagens/jaguar.jpg",
    description:
      "A onça, onça ou yaguareté (Panthera onca) é um felino carnívoro da subfamília Panterine e do gênero Panthera. É a única das cinco espécies atuais deste gênero que se encontra na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
    createdAt: "2021-05-18T23:12:11.837Z",
  },
  {
    title: "Guepardo",
    imgUrl: "./imagens/chita.jpg",
    description:
      "A chita ou chita (Acinonyx jubatus)1 é um membro atípico da família Felidae. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e sua grande velocidade. É o animal terrestre mais rápido, pois atinge a velocidade máxima de 115 km/h em corridas de até quatrocentos ou quinhentos metros.",
    createdAt: "2021-05-22T23:12:11.837Z",
  },
];

function mudarModoDesign() {
  // codigo removido pq a ideia original era fazer com if/else
  // console.log(
  //     "buttonDarkMode: ", buttonDarkMode,
  //     "\nvalue: ", buttonDarkMode.value,
  //     "\nchecked: ", buttonDarkMode.checked
  // )

  body.classList.toggle("dark-body");
  barraMenu.classList.toggle("dark-barra-menu");

  // 1ª Solução
  // for (let index = 0; index < cardList.length; index++) {
  //     cardList[index].classList.toggle("dark-card")
  //     cardList[index].classList.toggle("dark-card-text")
  // }

  // 2ª Solução
  // for (let index = 0; index < cardList.length; index++) {
  //     const item = cardList[index]
  //     item.classList.toggle("dark-card")
  //     item.classList.toggle("dark-card-text")
  // }

  //Solução final
  for (const item of cardList) {
    item.classList.toggle("dark-card");
    item.classList.toggle("dark-card-text");
  }
}

for (let index = 0; index < 5; index++) {
  let divItem = document.createElement("div");
  divItem.classList.add("item");

  console.log(divItem);
}

function createImgElement(imgPath) {
  let img = document.createElement("img");
  img.src = imgPath;
  return document.getElementByClass("item").appendChild(img);
}

function createTitle(titleText) {
  let title = document.createElement("h2");
  document.getElementByClass("item").appendChild(title);
  const textNode = document.createTextNode(titleText);
  return title.appendChild(textNode);
}

function createDescription(descriptionText) {
  let description = document.createElement("p");
  document.getElementByClass("item").appendChild(description);
  const textNode = document.createTextNode(descriptionText);
  return description.appendChild(textNode);
}

function addItemNaTela() {
  for (let index = 0; index <= 5; index++) {
    let divItem = document.createElement("div");
    divItem.classList.add("item");

    divItem.createTitle(listaDeFelinos[i].title);
    divItem.createImgElement(listaDeFelinos[i].imgUrl);
    divItem.createDescription(listaDeFelinos[i].description);
    console.log(divItem);
  }
  return divItem
}

//   {
//     title: 'Tigre',
//     imgUrl: './imagens/tiger.jpg',
//     description: 'O tigre (Panthera tigris) é uma das espécies da subfamília pantherine (família Felidae) pertencente ao gênero Panthera. Encontra-se apenas no continente asiático; É um predador carnívoro e é a maior espécie de felídeo do mundo, juntamente com o leão, ambos podem atingir um tamanho comparável ao de fósseis de felinos maiores.',
//     createdAt: '2021-06-01T23:12:11.837Z'
// },

// {/* <div class="item">
//       <img src="./imagens/tiger.jpg">
//       <h2>O tigre</h2>
//       <p>
//         O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)
//         pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador
//         carnívoro e
//         é a maior espécie de felino do mundo junto com o leão.
//       </p>
//     </div> */}
