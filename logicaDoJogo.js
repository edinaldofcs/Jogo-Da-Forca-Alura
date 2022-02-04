// Variáveis do jogo
const cemiterio = document.getElementById('cemiterio');
const container = document.getElementById('container');
const sons = ['yes.mp3', 'errojogo.mp3','morte.mp3','acerto.mp3']

var dificuldade;
var palavra = ['ALURA', 'JAVASCRIPT', 'ALURAVERSO', 'REACT'];
var numeroLista, espacoLetrasCertas, espacoLetrasErradas;
var letrasNoCemiterio = 0;
var qtdeLetrasEncontradas = 0;
var quantidadeDeBlocos;


const tocar = (som)=>{
    var audio = new Audio(som);
    audio.play();
}

//Funções - Regras do jogo
const selecionarElementos = (val) => document.querySelectorAll(val);
const criarElemento = (el) => document.createElement(el);

function setElemento(tag, tagPai, nomeId, nomeClass) {
    var el = criarElemento(tag);
    tagPai.appendChild(el);
    el.setAttribute('id', nomeId);
    el.setAttribute('class', nomeClass);
    return el;
}

function montarJogo(palavraEscolhida) {
    for (var i = 0; i < palavraEscolhida.length; i++) {
        let el = setElemento('div', container, 'valor', 'valor');
    }
    espacoLetrasCertas = selecionarElementos('#valor');
}

function escolherPalavra() {
    numeroLista = Math.floor(Math.random() * palavra.length);
    montarJogo(palavra[numeroLista]);
}


document.addEventListener('keypress', (e) => {

    if (letrasNoCemiterio == dificuldade.value) return;

    var teste = e.key.replaceAll(/[^a-zA-Z]/g, '').toUpperCase();
    teste && verificarSeALetraExiste(teste);
})


function verificarSeALetraExiste(letra) {
    if (palavra[numeroLista].includes(letra)) {
        inserirTexto(palavra[numeroLista], letra);
    } else {
        adicionarAoCemiterio(letra);
    }
}


function inserirTexto(texto, letra) {
    for (var i = 0; i < texto.length; i++) {
        if (letra == texto[i] && espacoLetrasCertas[i].innerHTML == '') {
            espacoLetrasCertas[i].innerHTML = letra;
            qtdeLetrasEncontradas++;
        }
    }

    tocar(sons[0]);
    verificarVitoria(qtdeLetrasEncontradas, texto.length);
}

function verificarVitoria(cont, texto) {
    if (cont == texto) {
        setTimeout(() => {
            tocar(sons[3]);
            theEnd.style.opacity = '100%';
            theEnd.src = imagens[0];
        }, 1000);
    }
}

function adicionarAoCemiterio(letra) {
    if (letrasNoCemiterio == 0) {
        let el = setElemento('div', cemiterio, 'fim', 'fim');
        el.innerHTML = letra;
        letrasNoCemiterio++;
        espacoLetrasErradas = selecionarElementos('#fim');
    } else {
        var contem = false;
        for (var i = 0; i < espacoLetrasErradas.length; i++) {
            if (espacoLetrasErradas[i].innerHTML.includes(letra)) contem = true;
        }
        if (contem == false) {
            let el = setElemento('div', cemiterio, 'fim', 'fim');
            el.innerHTML = letra;
            letrasNoCemiterio++;
        }
    }
    espacoLetrasErradas = selecionarElementos('#fim');
    tocar(sons[1])
    verificarDerrota(letrasNoCemiterio, dificuldade.value);
    posicao1();
    quantidadeDeBlocos--;
    plataforma(quantidadeDeBlocos)
}


function verificarDerrota(cont, texto) {
    if (cont == texto) {
        setTimeout(() => {
            animarMorte();
            tocar(sons[2])
        }, 500);
        setTimeout(() => {
            theEnd.style.opacity = '100%';
            theEnd.src = imagens[1];
        }, 2000);
    }
}

