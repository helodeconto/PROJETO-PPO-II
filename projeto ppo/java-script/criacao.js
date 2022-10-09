//classes
class Personagem {

    constructor(nome) {
        this.nome = nome
    }

    getNome(nome){
        return nome
    }
}

class Cenario {

    constructor(nome) {
        this.nome = nome
    }

    getNome(nome){
        return nome
    }

    setNome(novoNome) {
        this.nome = novoNome
    }
}

let classePersonagem = new Personagem()
let classeCenario = new Cenario()

//abre menu
const nav = document.querySelector("nav")
const divMenu = nav.querySelector("div")
const ulMenu = nav.querySelector("ul")

divMenu.addEventListener('click', ev => {
    ulMenu.classList.toggle("nav-list")
})


//adiciona personagem
const addPersonagem = document.querySelector(".add-personagem")
let containerPersonagem = document.querySelector(".container-personagem")

addPersonagem.addEventListener("click", () => {
    
    swal("Novo personagem", {
        content: "input",
    })
    .then((nome) => {
        classePersonagem.nome = nome
        let novoPersonagem = document.createElement("div")
        novoPersonagem.innerText = classePersonagem.nome;
        containerPersonagem.appendChild(novoPersonagem)
    });
})

//deleta personagem
//impede o context menu padrão de ser exibido
containerPersonagem.addEventListener("contextmenu", ev => {
    
    let personagem = Array.from(containerPersonagem.querySelectorAll("div"))
    let idxClickedElement = personagem.indexOf(ev.target)
    ev.preventDefault();
    swal("O que deseja fazer com " + personagem[idxClickedElement].innerHTML + "?", {
    buttons: {
        renomear: {
        text: "Renomear",
        value: "renomear",
        },
        excluir: true,
    },
    })
    .then((value) => {
    switch (value) {
    
        case "excluir":
            swal("Pronto! Você excluiu " + personagem[idxClickedElement].innerHTML, {
                icon: "success",
            });
            const deletaPersonagem = ev.target
            deletaPersonagem.remove()
        break;
    
        case "renomear":
            swal("Renomear " + personagem[idxClickedElement].innerHTML + ":", {
                content: "input",
            })
            .then((nome) => {
                ev.target.innerHTML = nome
            });
        break;
    }
    });
})

//adiciona cenário
const addCenario = document.querySelector(".add-cenario")
const containerCenario = document.querySelector(".container-cenario")

addCenario.addEventListener("click", () => {
    
    swal("Novo cenário:", {
        content: "input",
    })
    .then((nome) => {
        classeCenario.nome = nome
        let novoCenario = document.createElement("div")
        novoCenario.innerText = classeCenario.nome;
        containerCenario.appendChild(novoCenario)
    });
})

//deleta cenário
//impede o context menu padrão de ser exibido
containerCenario.addEventListener("contextmenu", ev => {
    
    let cenario = Array.from(containerCenario.querySelectorAll("div"))
    let idxClickedElement = cenario.indexOf(ev.target)
    ev.preventDefault();
    swal("O que deseja fazer com " + cenario[idxClickedElement].innerHTML + "?", {
    buttons: {
        renomear: {
        text: "Renomear",
        value: "renomear",
        },
        excluir: true,
    },
    })
    .then((value) => {
    switch (value) {
    
        case "excluir":
            swal("Pronto! Você excluiu " + cenario[idxClickedElement].innerHTML, {
                icon: "success",
              });
              const deletaCenario = ev.target
              deletaCenario.remove()
        break;
    
        case "renomear":
            swal("Renomear " + cenario[idxClickedElement].innerHTML + ":", {
                content: "input",
            })
            .then((nome) => {
                ev.target.innerHTML = nome
            });
        break;
    }
    });
})

//cria diálogo
// !! colocar o nome do personagem adicionado
const main = document.querySelector("main")
const areaTrabalho = main.querySelector(".workspace")

containerPersonagem.addEventListener("click", ev => {

    let personagem = Array.from(containerPersonagem.querySelectorAll("div"))
    let idxClickedElement = personagem.indexOf(ev.target)
    const templateDialogo = main.querySelector("template.fala")

    let areaDialogo = document.createElement("div")
    areaDialogo.className = "area-dialogo"
    areaDialogo.innerHTML = personagem[idxClickedElement].innerHTML

    let cloneModal = templateDialogo.content.cloneNode(true)
    areaDialogo.appendChild(cloneModal)

    areaTrabalho.appendChild(areaDialogo)

})


//adiciona cenário na cena
const divCenario = areaTrabalho.querySelector("div")

containerCenario.addEventListener("click", ev => {

    let cenario = Array.from(containerCenario.querySelectorAll("div"))
    let idxClickedElement = cenario.indexOf(ev.target)

    console.log(cenario[idxClickedElement].innerHTML)
    divCenario.innerHTML = cenario[idxClickedElement].innerHTML

})

//remove diálogo
areaTrabalho.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-delete")
    const areaDialogo = ev.target.closest(".area-dialogo")
    
    if (btClose != null) {
        btClose.addEventListener("click", ev => {
            const modalFala = ev.target.closest(".area-dialogo")
            modalFala.remove()
        })
        const modalFala = ev.target.closest(".area-dialogo")
        modalFala.remove()
    }
})

//adicionar emoção
/*const workspace = document.querySelector(".workspace")
const addEmocao = workspace.querySelector(".add-emocao")

addEmocao.addEventListener("click", () => {
})*/

//pop-up emoção
let idxAddEmocao = 0

areaTrabalho.addEventListener("click", ev => {
    const addEmocao = ev.target.closest(".add-emocao")

    addEmocao.addEventListener("click", ev => {

        if (addEmocao != null) {
            let addEmocao = Array.from(areaTrabalho.querySelectorAll(".add-emocao"))
            idxAddEmocao = addEmocao.indexOf(ev.target)
            console.log(idxAddEmocao)
            let url="popup-emocao.html"
            window.open(url,'janela', 'width=600, height=500, top= 200, left=700, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no')
            return idxAddEmocao
        }

    })
})