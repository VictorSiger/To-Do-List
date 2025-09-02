let inputTarefa = document.getElementById("inpTarefa")
let botaoAdicionarTarefa = document.getElementById("botaoAdd")
let tarefasContainer = document.getElementById("tarefasContainer")

let listaTarefas = resgatarItemDoLocalStorage("tarefas")
console.log(listaTarefas)
if(listaTarefas == null ){
    listaTarefas = []
    console.log(listaTarefas)
}

botaoAdicionarTarefa.addEventListener("click", adicionarTarefa)

criarTabela()

function adicionarTarefa(){
    tabelaTarefas = ""
    listaTarefas.push(inputTarefa.value)
    inputTarefa.value = ""
    guardarNoLocalStorage("tarefas", listaTarefas)
    criarTabela()
    console.log("Tarefa guardada com sucesso!" + listaTarefas)
}

function editarTarefa(){
    
}

function excluirTarefa(tarefa){
    console.log(tarefa)
}

let botoesExcluir = document.getElementsByClassName("botao-excluir-tarefa")
console.log(botoesExcluir)
botoesExcluir.addEventListener("click", excluirTarefa(this))

function criarTabela(){
    
    tarefasContainer.innerHTML = ""
    
    listaTarefas.forEach(tarefas => {
        let tarefa = document.createElement("div")
        let textoTarefa = document.createElement("p")
        let botoesContainer = document.createElement("div")
        let botaoEditar = document.createElement("button")
        let botaoExcluir = document.createElement("button")
        
        tarefa.classList.add("tarefaContainer")
        
        textoTarefa.classList.add("texto-tarefa")
        textoTarefa.innerText = tarefas
        
        botaoEditar.classList.add("botao-editar-tarefa", "fa-solid", "fa-pen")
        
        botaoExcluir.classList.add("botao-excluir-tarefa", "fa-solid", "fa-trash")
        
        botoesContainer.classList.add("botoes")
        botoesContainer.appendChild(botaoEditar)
        botoesContainer.appendChild(botaoExcluir)
        
        tarefa.appendChild(textoTarefa)
        tarefa.appendChild(botoesContainer)
        
        tarefasContainer.appendChild(tarefa)
    });
    
}
