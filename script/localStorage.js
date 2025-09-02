function guardarNoLocalStorage(palavraChave, conteudo){
    if(window.localStorage){
        let conteudoCriptografado = JSON.stringify(conteudo)
        return localStorage.setItem(palavraChave, conteudoCriptografado)
    }
    else{
        window.alert("Navegador sem local Storage!")
        return null
    }
}

function resgatarItemDoLocalStorage(palavraChave){
    if(window.localStorage){
        let conteudoCriptografado = localStorage.getItem(palavraChave)
        return JSON.parse(conteudoCriptografado)
    }
    else{
        window.alert("Navegador sem local Storage!")
        return null
    }
}