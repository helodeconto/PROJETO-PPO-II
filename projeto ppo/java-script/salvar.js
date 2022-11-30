const h1Titulo = document.querySelector(".title")
const fileSelector = document.querySelector(".file-selector")
const btSave = document.querySelector(".bt-sav")


let data = {}

function aoLerOArquivo() {
    h1Titulo.innerHTML = data.title
    console.log(data.personagens)
    //lê e add personagens
    for (let i = 0; i < data.personagens.length; i++){
        console.log(data.personagens[i]["nome"])
        let novoPersonagem = document.createElement("div")
        novoPersonagem.innerText = data.personagens[i]["nome"];
        containerPersonagem.appendChild(novoPersonagem).setAttribute("name", data.personagens[i]["nome"].toUpperCase())
    }
    //lê e add cenários
    for (let i = 0; i < data.cenarios.length; i++){
        console.log(data.cenarios[i]["nome"])
        let novoCenario = document.createElement("div")
        novoCenario.innerText = data.cenarios[i]["nome"];
        containerCenario.appendChild(novoCenario).setAttribute("name", data.cenarios[i]["nome"].toUpperCase())
    }
}

function aoSalvarOArquivo() {
    let personagens = Array.from(containerPersonagem.querySelectorAll("div"))
    let cenarios = Array.from(containerCenario.querySelectorAll("div"))
    let emocoes = document.querySelector(".area-emocao")
    let emoji = Array.from(emocoes.querySelectorAll(".emoji"))
    let nomeEmocao = Array.from(emocoes.querySelectorAll(".nome-emocao"))

    //salvar título
    data.title = h1Titulo.innerHTML
    //salvar personagens
    data.personagens = personagens.map(div => ({"nome" : div.innerText}))
    //salvar cenários
    data.cenarios = cenarios.map(div => ({"nome" : div.innerText}))
    //salvar emoji
    data.emocoes = emoji.map(div => ({"emoji": div.innerText}))
}

//Ler arquivo
function lerArquivo(file) {
    const reader = new FileReader()
    reader.addEventListener("load", event => {
        const content = event.target.result
        data = JSON.parse(content)
        aoLerOArquivo()
    })
    reader.readAsBinaryString(file)
}

//salvar arquivo
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