const h1Titulo = document.querySelector(".title")
const fileSelector = document.querySelector(".file-selector")
const btSave = document.querySelector(".bt-sav")


let data = {}

function aoLerOArquivo() {
    h1Titulo.innerHTML = data.title
}

function aoSalvarOArquivo() {
    const containerPersonagem = document.querySelector(".container-personagem")
    let personagem = Array.from(containerPersonagem.querySelectorAll("div"))
    data.title = h1Titulo.innerHTML
    
    for (let i = 0; i < personagem.length; i++) {
        console.log(personagem[i].getAttribute('name'))
        nomePersonagem = personagem[i].getAttribute('name')
        data.personagens[i] = {"nome" : nomePersonagem};
    }
}

function lerArquivo(file) {
    const reader = new FileReader()
    reader.addEventListener("load", event => {
        const content = event.target.result
        data = JSON.parse(content)
        aoLerOArquivo()
    })
    reader.readAsBinaryString(file)
}

function salvarArquivo() {
    aoSalvarOArquivo()
    const a = document.createElement("a")
    const file = new Blob([JSON.stringify(data)], { type: "text/plain" })
    a.href = URL.createObjectURL(file)
    a.download = "data.json"
    document.body.appendChild(a)
    a.dispatchEvent(new MouseEvent("click"))
    document.body.removeChild(a)
    URL.revokeObjectURL(file)
}

fileSelector.addEventListener("change", event => lerArquivo(event.target.files[0]))
btSave.addEventListener("click", ev => salvarArquivo())