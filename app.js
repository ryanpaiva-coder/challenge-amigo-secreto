let amigos = [];

function nomesDosAmigos() {
    let nome = document.querySelector("input").value;

    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome.value);
        document.querySelector("input").value = "";
    }
}

function exibirAmigos() {
    let lista = document.getElementById(listaAmigos);
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}