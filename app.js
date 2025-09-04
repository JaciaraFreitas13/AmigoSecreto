// Lista para agregar nomes
let listaAmigos = [];
 // Adicionando nomes na lista 
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    limparCampo();
    exibirLista();
    }
//Limpar barra do campo nome 
        function limparCampo(){
            let campo = document.querySelector('input'); 
            campo.value = ''; 
        }

//Exibir nomes na tela
function exibirLista(){
    let lista =document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 
    for ( let i=0; i<listaAmigos.length; i++){
        lista.innerHTML+=  `<li> ${listaAmigos[i]} </li>`;
    }
}
// Sortear amigo 
function sortearAmigo(){
 if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return; 
 }
let resultadoSorteio = Math.floor(Math.random() * listaAmigos.length);
let amigoSorteado = listaAmigos[resultadoSorteio];
document.getElementById('resultado').innerHTML = "🎁 Amigo sorteado: " + amigoSorteado; 
}
