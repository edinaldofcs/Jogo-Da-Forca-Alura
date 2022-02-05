const imgMenu = document.getElementById('menu')
const imgFecharMenu = document.getElementById('img-menu')
const divMenu = document.getElementById('menu-config')
const esconderMostrarJogo = document.getElementById('jogo')
const input = document.getElementById('input')
const inserir = document.getElementById('inserir')
const iniciar = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')
const reset = document.getElementById('reset')

const telainicialTexto1 = document.querySelector('#tela-inicial-jogo');
const telainicialTexto2 = document.querySelector('#tela-inicial-forca');
const telaInicial = document.querySelector('#tela-inicial');
const body = document.querySelector('body');

var textoTemporario = '';
var theEnd = document.getElementById('theend')
const imagens = ['https://y.yarn.co/dca4b147-ff9f-4881-8bbd-aa182eb4fbb3_text.gif', 'https://i.gifer.com/8EzY.gif'];

input.addEventListener('input', () => {   
    
    if (input.value.length < 9) {
        input.value = input.value.replaceAll(/[^a-zA-Z]/g, '').toUpperCase()
        textoTemporario = input.value
    } else {
        input.value = textoTemporario
    }
    input.classList.remove('inputTexto');
})

inserir.addEventListener('click', ()=>{
    if(input.value.length >= 5){
        palavra.push(input.value)
        input.value = ''
        //console.log(palavra[0])
    } else{
        validarInput(true);
    }
})

iniciar.addEventListener('click', ()=>{
    setAlfabeto();
    iniciarJogo();
})

function iniciarJogo(){
    divMenu.style.display = 'none'
    telaInicial.style.display = 'none'
    // body.style.backgroundColor = 'white';
    imgMenu.style.display = 'none';
    esconderMostrarJogo.style.display = 'block';
    tela.style.display = 'block';
    theEnd.style.opacity = '0%';
    theEnd.style.zIndex = '99';
    posicaoInicial = true;
    dificuldade = document.getElementById('menu-select');
    quantidadeDeBlocos = dificuldade.value;
    plataforma(dificuldade.value);
    escolherPalavra();
}

imgMenu.addEventListener('click', () => {
    divMenu.classList.add('menu-show')
    divMenu.classList.remove('menu-hide')
})

imgFecharMenu.addEventListener('click', () => {
    divMenu.classList.remove('menu-show')
    divMenu.classList.add('menu-hide')
})

reiniciar.addEventListener('click', ()=>{
    pintarTudo();
    container.innerHTML = ''
    cemiterio.innerHTML = ''
    letrasNoCemiterio = 0;
    qtdeLetrasEncontradas = 0;    
    cemiterio.innerHTML = `<img class="fim-img" src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_960_720.png"/>`;
    posicaoInicial = 2;
    animarMorte();    
    iniciarJogo();
})


reset.addEventListener('click', ()=>{
    location.reload();
})

function typeWrite(texto1, texto2) {
    const textArray = texto1.innerHTML.split('');
    texto1.innerHTML = ' ';
    textArray.forEach(function (letra, i) {

        setTimeout(function () {
            if(i < 7){
                texto1.innerHTML += letra;
            }else{
                texto2.innerHTML += letra;
            }            
        }, 200 * i)               
    });
}


theEnd.addEventListener('click', ()=>{
    theEnd.style.opacity = '0%';
    theEnd.style.zIndex = '-1';
})

typeWrite(telainicialTexto1, telainicialTexto2);



function validarInput(condicao){

    if (!input.classList.contains('inputTexto')) {
        input.classList.add('inputTexto');
        if(condicao)input.classList.add('animar-form');
    } else {
        input.classList.remove('inputTexto');
    }

    if (condicao) {
        setTimeout(() => {
            input.classList.remove('animar-form');
            //input.classList.remove('inputTexto')        
        }, 400)        
    }
}

