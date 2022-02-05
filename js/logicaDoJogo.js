// Variáveis do jogo
const cemiterio = document.getElementById('cemiterio');
const container = document.getElementById('container');
const sons = ['./sounds/yes.mp3', './sounds/errojogo.mp3', './sounds/morte.mp3', './sounds/acerto.mp3']

var dificuldade;
var palavra = ['ALURA', 'JAVASCRIPT', 'ALURAVERSO', 'REACT', 'DESAFIO', 'MACARRAO', 'BANANA', 'TECLADO', 'VIOLAO', 'CONTROLE', 'IMERSAO', 'CELULAR', 'CADEIRA', 'CONDENADO'];
var numeroLista, espacoLetrasCertas, espacoLetrasErradas;
var letrasNoCemiterio = 0;
var qtdeLetrasEncontradas = 0;
var quantidadeDeBlocos;


const tocar = (som) => {
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

    if (esconderMostrarJogo.style.display == '') return;
    if (letrasNoCemiterio == dificuldade.value || qtdeLetrasEncontradas == palavra[numeroLista].length) return;

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
            tocar(sons[0]);
        }
    }

    pintarLetras(letra, 'green');
    verificarVitoria(qtdeLetrasEncontradas, texto.length);
}

function verificarVitoria(cont, texto) {
    if (cont == texto) {
        setTimeout(() => {
            tocar(sons[3]);
            theEnd.style.opacity = '100%';
            theEnd.style.zIndex = '99';
            theEnd.src = imagens[0];
        }, 1000);
    }
}

function adicionarAoCemiterio(letra) {
    if (letrasNoCemiterio == 0) {
        let el = setElemento('div', cemiterio, 'fim', 'fim');
        executar(el);
    } else {
        var contem = false;
        for (var i = 0; i < espacoLetrasErradas.length; i++) {
            if (espacoLetrasErradas[i].innerHTML.includes(letra)) contem = true;
        }
        if (contem == false) {
            let el = setElemento('div', cemiterio, 'fim', 'fim');
            executar(el);
        }
    }

    function executar(elemento) {

        elemento.innerHTML = letra;
        espacoLetrasErradas = selecionarElementos('#fim');
        letrasNoCemiterio++;
        quantidadeDeBlocos--;
        plataforma(quantidadeDeBlocos)
        tocar(sons[1]);
        pintarLetras(letra, 'red');
        verificarDerrota(letrasNoCemiterio, dificuldade.value);
        posicao1();
    }
}


function verificarDerrota(cont, texto) {
    if (cont == texto) {
        setTimeout(() => {
            animarMorte();
            tocar(sons[2])
        }, 500);
        setTimeout(() => {
            theEnd.style.opacity = '100%';
            theEnd.style.zIndex = '99';
            theEnd.src = imagens[1];
        }, 2000);
    }
}



//==============
const alfabeto = document.getElementById('alfabeto')
var botoesLetras;

function setAlfabeto() {
    for (var i = 0; i < 26; i++) {
        botoesLetras = document.createElement('button')
        alfabeto.appendChild(botoesLetras)
        botoesLetras.classList.add('letra')
        botoesLetras.setAttribute('id', `letra${String.fromCharCode(65 + i)}`)
        botoesLetras.innerHTML = String.fromCharCode(65 + i)
    }

}

function pintarLetras(idLetra, cor) {
    var todos = document.querySelectorAll('.letra')
    for (const index in todos) {
        if (`letra${idLetra}` == todos[index].id) {
            todos[index].style.backgroundColor = cor
        }
    }

}

function pintarTudo() {
    var todo = document.querySelectorAll('.letra')
    for (var i = 0; i < todo.length; i++) {
        todo[i].style.backgroundColor = 'rgb(240, 240, 240)'
    }

}

alfabeto.addEventListener('click', (event) => {
    if (letrasNoCemiterio == dificuldade.value || qtdeLetrasEncontradas == palavra[numeroLista].length) return;
    if (event.target.id == 'alfabeto') return;
    verificarSeALetraExiste(event.target.innerHTML);
})

