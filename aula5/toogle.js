let buttonDarkMode = document.getElementById("buttonDarkMode");

let body = document.body
let barraMenu = document.getElementById("barra-menu")
let cardList = document.querySelector(".item")

function mudarModoDesign(){
    body.classList.toggle("dark-body")
    barraMenu.classList.toggle("dark-barra-menu")

    for(const item of cardList){
        item.classList.toggle("dark-card")
        item.cardList.toggle("dark-card-text")
    }
}