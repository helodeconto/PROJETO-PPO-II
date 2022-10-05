//import idxAddEmocao from "./criacao"

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

const areaEmocao = document.querySelector(".area-emocoes")

areaEmocao.addEventListener("click", ev => {
    let emocao = ev.target.closest(".emocao")
    let areaEmoji = emocao.querySelector("div")
    let emoji = areaEmoji.innerText
    console.log(emoji)

    /*const areaTrabalho = document.querySelector(".worspace")
    let addEmocao = Array.from(areaTrabalho.querySelectorAll(".add-emocao"))

    addEmocao[idxAddEmocao].innerText = emoji*/
})

//nova emoção
const btNovaEmocao = document.querySelector(".nova-emocao")

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
            novaEmocao.innerHTML = `<div> ${emoji} </div> <div> ${nome} </div>`;
            areaEmocao.appendChild(novaEmocao)
        })
    });
})

//mostra emoção no console
areaEmocao.addEventListener("contextmenu", ev => {
    
    let listaEmocao = Array.from(areaEmocao.querySelectorAll(".emocao"))
    let idxClickedElement = listaEmocao.indexOf(ev.target)
    ev.preventDefault();
    swal("O que deseja fazer com a emoção?", {
    buttons: {
        editar: {
        text: "cancelar",
        value: "cancel",
        },
        excluir: true,
    },
    })
    .then((value) => {
    switch (value) {
    
        case "excluir":
            swal("Pronto! A emoção foi excluída.", {
                icon: "success",
              });
              const deletaEmocao = ev.target.closest(".emocao")
              deletaEmocao.remove()
        break;
    
        case "cancel":
            close
        break;
    }
    });
})