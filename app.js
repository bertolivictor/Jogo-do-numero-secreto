//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto.';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10.';

let listaDeNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('h1', '');
            exibirTextoNaTela('p' , `O número secreto é menor.`);
        }else{
            exibirTextoNaTela('h1', '');
            exibirTextoNaTela('p' , `O número secreto é maior.`);
        }
        tentativas ++;
        limparCampo();
    }
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10) +1;
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){;
    return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}