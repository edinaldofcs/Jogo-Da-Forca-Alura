
var palavra = ['ALURA', 'JAVASCRIPT', 'ALURAVERSO', 'REACT'];
// 'ALURA', 'JAVASCRIPT', 'ALURAVERSO', 'REACT'
const div = document.getElementById('container')
const cemiterio = document.getElementById('cemiterio')
const dificuldade = document.getElementById('menu-select')
var numero;
var selecionar = (val) => document.querySelectorAll(val);
var criarElemento = (el) => document.createElement(el);
var jogo;
var fim;


function setElemento(tag, pai, nomeId, nomeClass) {
    var el = criarElemento(tag)
    pai.appendChild(el)
    el.setAttribute('id', nomeId)
    el.setAttribute('class', nomeClass)
    return el;
}

function montarJogo(palavra) {


    for (var i = 0; i < palavra.length; i++) {

        let el = setElemento('div', div, 'valor', 'valor')
    }

    jogo = selecionar('#valor')

}

function escolherPalavra() {

    numero = Math.floor(Math.random() * palavra.length)

    montarJogo(palavra[numero]);
}




const entradas = document.querySelector('#teste')

document.addEventListener('keypress', (e) => {

    var teste = e.key.replaceAll(/[^a-zA-Z]/g, '').toUpperCase();

    teste && verificarSeALetraExiste(teste);

})

var numCemiterio = 0;
function verificarSeALetraExiste(letra) {

    if (palavra[numero].includes(letra)) {

        inserirTexto(palavra[numero], letra);

    } else {

        adicionarAoCemiterio(letra);

    }

}

var cont = 0;
function inserirTexto(texto, letra) {
    for (var i = 0; i < texto.length; i++) {
        if (letra == texto[i] && jogo[i].innerHTML == '') {
            jogo[i].innerHTML = letra
            cont ++;
        }
    }

    verificarVitoria(cont,texto.length);
    
}

function verificarVitoria(cont, texto){
    
    if(cont == texto){
        setTimeout(() => {
            alert('vitoria')
        }, 200);
    } 
}

function adicionarAoCemiterio(letra) {

    if (numCemiterio == 0) {

        let el = setElemento('div', cemiterio, 'fim', 'fim')
        el.innerHTML = letra;
        numCemiterio++;
        fim = selecionar('#fim')
    } else {

        var contem = false

        for (var i = 0; i < fim.length; i++) {
            if (fim[i].innerHTML.includes(letra)) contem = true
        }

        if (contem == false) {

            let el = setElemento('div', cemiterio, 'fim', 'fim')
            el.innerHTML = letra;
            numCemiterio++;

        }

    }

    fim = selecionar('#fim')

    verificarDerrota(numCemiterio, dificuldade.value)
    
}


function verificarDerrota(cont, texto){
    
    if(cont == texto){
        setTimeout(() => {
            alert('derrota')
        }, 200);
    } 
}
//escolherPalavra();

//-------------------------
const input = document.getElementById('input')
var save = '';

const inserir = document.getElementById('inserir')
const iniciar = document.getElementById('iniciar')

input.addEventListener('input', () => {
    

    if (input.value.length < 9) {
        input.value = input.value.replaceAll(/[^a-zA-Z]/g, '').toUpperCase()
        save = input.value
    } else {
        input.value = save
    }

})

inserir.addEventListener('click', ()=>{

    if(input.value.length >= 5){
        palavra.push(input.value)
        input.value = ''
        console.log(palavra[0])
    }  
})

iniciar.addEventListener('click', ()=>{
    
    escolherPalavra();
    menu.style.display = 'none'
    telaInicial.style.display = 'none'
    body.classList.add('body')
    imgMenu.style.display = 'none';
    jogos.style.display = 'block';
})