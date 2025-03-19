let listaAmigos = [];

function escreverLista(){
    let texto = "";
    for(let i = 0; i < listaAmigos.length; i++){
        texto += listaAmigos[i] + "<br>";
    }
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = texto;
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if(amigo.length === 0 || amigo.length > 20){
        alert("Por favor, insira um nome válido.");
        return;
    }
    listaAmigos.push(amigo);
    escreverLista();    
}

function sortearAmigo() {
    if(listaAmigos.length === 0){
        alert("Você ainda não tem amigos!");
        return;
    }else{
        let sorteio = Math.floor(Math.random()*listaAmigos.length);
        let result = document.getElementById("resultado");
        result.innerHTML = "O amigo secreto sorteado é: "+listaAmigos[sorteio];
    }
}