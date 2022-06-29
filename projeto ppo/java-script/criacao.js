//classes
class Personagem {

    constructor(nome) {
        this.nome = nome
    }

    getNome(nome){
        return nome
    }
}

let classePersonagem = new Personagem()

//abre menu
const nav = document.querySelector("nav")
const divMenu = nav.querySelector("div")
const ulMenu = nav.querySelector("ul")

divMenu.addEventListener('click', ev => {
    ulMenu.classList.toggle("nav-list")
})


//adiciona personagem
const addPersonagem = document.querySelector(".add-personagem")
let personagens = document.querySelector(".container-personagem")

addPersonagem.addEventListener("click", () => {
    
    swal("Novo personagem", {
        content: "input",
    })
    .then((nome) => {
        classePersonagem.nome = nome
        let novoPersonagem = document.createElement("div")
        novoPersonagem.innerText = classePersonagem.nome;
        personagens.appendChild(novoPersonagem)
    });
})

//adiciona cenário
const addCenario = document.querySelector(".add-cenario")
const cenario = document.querySelector(".container-cenario")

addCenario.addEventListener("click", () => {
    
    swal("Novo cenário:", {
        content: "input",
    })
    .then((nome) => {
        let novoCenario = document.createElement("div")
        novoCenario.innerText = nome;
        cenario.appendChild(novoCenario)
    });
})

//cria diálogo
// !! colocar o nome do personagem adicionado
const main = document.querySelector("main")
const areaTrabalho = main.querySelector(".workspace")

personagens.addEventListener("dblclick", ev => {

    let personagem = Array.from(personagens.querySelectorAll("div"))
    let idxClickedElement = personagem.indexOf(ev.target)
    const templateDialogo = main.querySelector("template.fala")

    let areaDialogo = document.createElement("div")
    areaDialogo.className = "area-dialogo"
    areaDialogo.innerHTML = personagem[idxClickedElement].innerHTML

    let cloneModal = templateDialogo.content.cloneNode(true)
    areaDialogo.appendChild(cloneModal)

    areaTrabalho.appendChild(areaDialogo)

})


//adiciona cenário na cena **
const divCenario = areaTrabalho.querySelector("div")

cenario.addEventListener("dblclick", ev => {

    let cenarios = Array.from(cenario.querySelectorAll("div"))
    let idxClickedElement = cenarios.indexOf(ev.target)

    console.log(cenarios[idxClickedElement].innerHTML)
    divCenario.innerHTML = cenarios[idxClickedElement].innerHTML

})

//remove diálogo
areaTrabalho.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-delete")
    const areaDialogo = ev.target.closest(".area-dialogo")

    btClose.addEventListener("click", ev => {
        const modalFala = ev.target.closest(".area-dialogo")
        modalFala.remove()
    })
    
    if (btClose != null) {
        const modalFala = ev.target.closest(".area-dialogo")
        modalFala.remove()
    }
})

//adicionar emoção
/*const workspace = document.querySelector(".workspace")
const addEmocao = workspace.querySelector(".add-emocao")

addEmocao.addEventListener("click", () => {
})*/