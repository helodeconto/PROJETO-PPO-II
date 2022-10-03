/*function showContent() {
    var template = document.getElementsByTagName("template")[0];
    var clon = template.content.cloneNode(true);
    document.body.appendChild(clon);
}*/

class Projeto {

    constructor(nome) {
        this.nome = nome
    }

    getNome(nome){
        return nome
    }
}

let classeProjeto = new Projeto()

/*let main = document.querySelector("main")
let containerProjeto = main.querySelector(".container-projeto")
let addProjeto = main.querySelector(".add-projeto")

addProjeto.addEventListener("click", () => {
    
    swal("Nova história", {
        content: "input",
    })
    .then((nome) => {
        classeProjeto.nome = nome
        let novoProjeto = document.createElement("div")
        novoProjeto.innerText = classeProjeto.nome;
        containerProjeto.appendChild(novoProjeto)
    });
})*/


let main = document.querySelector("main")
let addProjeto = main.querySelector(".add-projeto")
let container = main.querySelector(".container-projetos")

addProjeto.addEventListener("click", () => {
    
    swal("Nova história", {
        content: "input",
    })
    .then((nome) => {
        classeProjeto.nome = nome
        let novoProjeto = document.createElement("div")
        novoProjeto.innerText = classeProjeto.nome;
        container.appendChild(novoProjeto)
        window.open("criacao.html")
    });
})