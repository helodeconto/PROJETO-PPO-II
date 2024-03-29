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

class Emocao {

    constructor(emoji,nome) {
        this.emoji = emoji
        this.nome = nome
    }

    getEmoji(emoji){
        return emoji
    }

    getNome(nome){
        return nome
    }

    setEmoji(novoEmoji){
        this.emoji = novoEmoji
    }

    setNome(novoNome) {
        this.nome = novoNome
    }
}

let classeEmocao = new Emocao()
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
        if (nome === ""){
            return
        }
        classePersonagem.nome = nome
        let novoPersonagem = document.createElement("div")
        novoPersonagem.innerText = nome;
        containerPersonagem.appendChild(novoPersonagem).setAttribute("name", nome.toUpperCase())
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
                if (nome === ""){
                    return
                }
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
        if (nome === ""){
            return
        }
        classeCenario.nome = nome
        let novoCenario = document.createElement("div")
        novoCenario.innerText = nome;
        containerCenario.appendChild(novoCenario).setAttribute("name", nome.toUpperCase())
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
                if (nome === ""){
                    return
                }
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


const containerEmocao = document.querySelector(".container")
const areaEmocao = containerEmocao.querySelector(".area-emocao")
const btNovaEmocao = containerEmocao.querySelector(".nova-emocao")

let lastClickedBtEmocao = null

areaTrabalho.addEventListener("click", ev => {
    //remove diálogo
    const btClose = ev.target.closest(".bt-delete")
    const areaDialogo = ev.target.closest(".area-dialogo")
    
    console.log(ev.target)

    if (btClose != null) {
        btClose.addEventListener("click", ev => {
            const modalFala = ev.target.closest(".area-dialogo")
            modalFala.remove()
        })
        const modalFala = ev.target.closest(".area-dialogo")
        modalFala.remove()
    }

    if(ev.target.classList.contains("add-emocao")) {
        const el = ev.target
        lastClickedBtEmocao = ev.target
        console.log(el) 
        containerEmocao.classList.toggle("show")
        return
    }
})

//add emoção na fala
areaEmocao.addEventListener("click", ev => {
    let emocao = ev.target.closest(".emocao")
    let areaEmoji = emocao.querySelector("div")
    let emoji = areaEmoji.innerText
    lastClickedBtEmocao.innerText = emoji
    containerEmocao.classList.toggle("show")
})

btNovaEmocao.addEventListener("click", () => {
    swal("Nova emoção:", {
        content: "input",
    })
    .then((nome) => {
        swal("Selecione um emoji", {
            content: "input",
        })
        .then((emoji) => {
            classeEmocao.nome = nome
            let novaEmocao = document.createElement("div")
            novaEmocao.setAttribute('class', 'emocao')
            novaEmocao.innerHTML = `<div class="emoji"> ${emoji} </div> <div class="nome-emocao"> ${nome} </div>`;
            areaEmocao.appendChild(novaEmocao)
        })
    })
})