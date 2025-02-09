const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "❌";
        btnRemover.onclick = () => removerAmigo(index);
        btnRemover.style.marginLeft = "20px";
       
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `✨🎊🎉 O amigo secreto é: ${amigoSorteado}! 🎉🎊✨`;
    resultado.style.fontWeight = "italic";
    resultado.style.color = "Purple";
    resultado.style.marginTop = "20px";
}