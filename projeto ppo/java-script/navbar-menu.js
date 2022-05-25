const nav = document.querySelector("nav")
const divMenu = nav.querySelector("div")
const ulMenu = nav.querySelector("ul")


divMenu.addEventListener('click', ev => {
    ulMenu.classList.toggle("nav-list")
})

const addPersonagem = document.querySelector(".add-personagem")
const personagem = document.querySelector(".container-personagem")
const templatePersonagem = personagem.querySelector("template.personagem")

addPersonagem.addEventListener("click", () => {
    const cloneModal = templatePersonagem.content.cloneNode(true)
    personagem.appendChild(cloneModal)
})

const addCenario = document.querySelector(".add-cenario")
const cenario = document.querySelector(".container-cenario")
const templateCenario = cenario.querySelector("template.cenario")

addCenario.addEventListener("click", () => {
    const cloneModal = templateCenario.content.cloneNode(true)
    cenario.appendChild(cloneModal)
})