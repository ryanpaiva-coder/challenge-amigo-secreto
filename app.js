let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector("input").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        document.querySelector("input").value = "";
        exibirAmigos();
    }
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    let sorteio = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").innerHTML = amigos[sorteio];
}