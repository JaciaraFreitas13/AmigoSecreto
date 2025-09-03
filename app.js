// Lista para agregar nomes
let listaAmigos = [];
 


// Adicionando nomes na lista 
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == ''){
        exibirTextoNaTela ('#Resultado', 'insira um nome válido');
        return
    }else{
        listaAmigos.push(nome);
        limparCampo();
        exibirLista();
    }
    }
    
        function limparCampo(){
            let campo = document.querySelector('input'); 
            campo.value = ''; 
        }
        //Exibir nomes na tela
function exibirLista(){
    let lista =document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 
    for (i=0; i<listaAmigos.length; i++){
        lista.innerHTML+=listaAmigos[i];

    }
}
// Sortear amigo 
function sortearAmigo(){
let resultadoSorteio = Math.floor(Math.random() *listaAmigos.length);
let amigoSorteado =listaAmigos[resultadoSorteio]; 
if (listaDeNomeSorteados.includes*amigoSorteado){
    return sortearAmigo();
}    else {
    listaDeNomeSorteados.push(amigoSorteado)
    document.getElementById('sortearAmigo').innerHTML= `amigo sorteado ${amigoSorteado}`; 
}
}