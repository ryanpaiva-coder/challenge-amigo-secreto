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