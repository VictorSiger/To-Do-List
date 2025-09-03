// Referenciar as TAGS HTML
const inputTarefa = document.getElementById("inpTarefa")
const botaoAddTarefa = document.getElementById("botaoAdd")
const botaoConfirmarEdicao = document.getElementById("botaoConfirmarEdicao")
const tarefasTabela = document.getElementById("tarefasContainer")
const espacoErroTarefa = document.getElementById("espacoErroTarefa")

// botaoConfirmarEdicao

// ArrayDeTarefas
let listaTarefas = resgatarItemDoLocalStorage("tarefas")
if(listaTarefas == undefined){
    listaTarefas = []
}

exibirTarefas()

// Adicionar tarefas
function adicionarTarefa(){
    if(inputTarefa.value !== "" && inputTarefa.value.length > 4){
    espacoErroTarefa.innerHTML = ""    
    let tarefa = {}
    tarefa.descricao = inputTarefa.value
    listaTarefas.push(tarefa)
    guardarNoLocalStorage("tarefas", listaTarefas)
    exibirTarefas()
    inputTarefa.value = ""
    }
    else{
        espacoErroTarefa.innerHTML = "E necessario o nome da tarefa ter no minimo 5 caracteres"
    }
}

botaoAddTarefa.addEventListener("click", adicionarTarefa)
// Excluir tarefas
tarefasTabela.addEventListener("click", function(){
    excluirEeditarTarefas(event)
})

function excluirEeditarTarefas(event){
    if(event.target.classList.contains("botao-excluir-tarefa")){
        const tarefaDoBotaoClicado = event.target.closest(".tarefaContainer")
        const tarefaId = Number(tarefaDoBotaoClicado.id)
        console.log(tarefaId)
        listaTarefas.splice(tarefaId, 1)
        guardarNoLocalStorage("tarefas", listaTarefas)
        exibirTarefas()
    }
    else if(event.target.classList.contains("botao-editar-tarefa")){
        botaoConfirmarEdicao.style.display = "block"
        listaTarefas = resgatarItemDoLocalStorage("tarefas")
        inputTarefa.placeholder = "Edite aqui a tarefa..." 
        const tarefaClicada = event.target.closest(".tarefaContainer")
        console.log(tarefaClicada)
        const tarefaID = Number(tarefaClicada.id)
        const tarefa = listaTarefas[tarefaID]
        console.log(tarefa)
      

        botaoConfirmarEdicao.addEventListener("click", (event) =>{
            tarefa.descricao = inputTarefa.value
            inputTarefa.value = ""
            listaTarefas[tarefaID] = tarefa
            console.log(tarefaID)
            console.log(tarefa)
            guardarNoLocalStorage("tarefas", listaTarefas)
            exibirTarefas()
            botaoConfirmarEdicao.style.display = "none"
        })
    }
}
// Criar a Tabela para exibição das tarefas
function exibirTarefas(){
    // zera a tabela de tarefas
    tarefasTabela.innerHTML = ""

    listaTarefas.forEach((tarefaObj, indice) => {
    // Cria os elementos necessarios para 'construir' a tarefa
    let tarefa = document.createElement("div")
    let textoTarefa = document.createElement("p")
    let botoesContainer = document.createElement("div")
    let botaoEditar = document.createElement("button")
    let botaoExcluir = document.createElement("button")
    
    tarefa.classList.add("tarefaContainer")
    tarefa.id = indice
    
    textoTarefa.classList.add("texto-tarefa")
    textoTarefa.innerText = tarefaObj.descricao
    
    botaoEditar.classList.add("botao-editar-tarefa", "fa-solid", "fa-pen")
    
    botaoExcluir.classList.add("botao-excluir-tarefa", "fa-solid", "fa-trash")
    
    botoesContainer.classList.add("botoes")
    botoesContainer.appendChild(botaoEditar)
    botoesContainer.appendChild(botaoExcluir)

    tarefa.appendChild(textoTarefa)
    tarefa.appendChild(botoesContainer)
    
    tarefasTabela.appendChild(tarefa)
    // atribui o indice do array ao id do objeto tarefa
    tarefaObj.id = indice
    })

    

    guardarNoLocalStorage("tarefas", listaTarefas)
}