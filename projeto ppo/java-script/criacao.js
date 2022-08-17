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
        let novoCenario = document.createElement("div")
        novoCenario.innerText = nome;
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

containerPersonagem.addEventListener("dblclick", ev => {

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


//adiciona cenário na cena **
const divCenario = areaTrabalho.querySelector("div")

containerCenario.addEventListener("dblclick", ev => {

    let cenario = Array.from(containerCenario.querySelectorAll("div"))
    let idxClickedElement = cenario.indexOf(ev.target)

    console.log(cenario[idxClickedElement].innerHTML)
    divCenario.innerHTML = cenario[idxClickedElement].innerHTML

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