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

    if (input.value.length <= 10) {
        input.value = input.value.replaceAll(/[^a-zA-Z]/g, '').toUpperCase()
        textoTemporario = input.value
    } else {
        input.value = textoTemporario
    }
    input.classList.remove('inputTexto');
})

inserir.addEventListener('click', () => {
    if (input.value.length >= 5) {
        palavra.push(input.value)
        input.value = ''
        //console.log(palavra[0])
        animarAlerta('green', 'white', 'PALAVRA ADICIONADA');
    } else {
        validarInput(input);
        animarAlerta('rgb(247, 63, 93)', 'black', 'CAMPO INVÁLIDO');
    }


})

function animarAlerta(corBack, corFont, texto) {
    var alerta = document.getElementById('alerta')
    alerta.style.backgroundColor = corBack;
    alerta.style.color = corFont;
    alerta.innerHTML = texto;
    alerta.style.display = 'block';
    alerta.classList.add('anima-alerta');
    setTimeout(() => {
        alerta.classList.remove('anima-alerta');
        alerta.style.display = 'none';
    }, 2000)
}

iniciar.addEventListener('click', () => {

    if (dificuldade.value == '') {
        validarInput(dificuldade);
        animarAlerta('rgb(247, 63, 93)', 'black', 'QUANTIDADE INVÁLIDA');
        return;
    }
    setAlfabeto();
    iniciarJogo();
})

function iniciarJogo() {
    palavracerta.style.display = 'none';
    divMenu.style.display = 'none'
    telaInicial.style.display = 'none'
    // body.style.backgroundColor = 'white';
    imgMenu.style.display = 'none';
    esconderMostrarJogo.style.display = 'block';
    tela.style.display = 'block';
    theEnd.style.opacity = '0%';
    theEnd.style.zIndex = '2';
    theEnd.src = ''
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

reiniciar.addEventListener('click', () => {
    pintarTodosOsBotoes();
    container.innerHTML = ''
    cemiterio.innerHTML = ''
    letrasNoCemiterio = 0;
    qtdeLetrasEncontradas = 0;
    cemiterio.innerHTML = `<img class="fim-img" src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_960_720.png"/>`;
    posicaoInicial = 2;
    animarMorte();
    iniciarJogo();
})


reset.addEventListener('click', () => {
    location.reload();
})

function typeWrite(texto1, texto2) {
    const textArray = texto1.innerHTML.split('');
    texto1.innerHTML = ' ';
    textArray.forEach(function (letra, i) {

        setTimeout(function () {
            if (i < 7) {
                texto1.innerHTML += letra;
            } else {
                texto2.innerHTML += letra;
            }
        }, 150 * i)
    });
}


theEnd.addEventListener('click', () => {
    theEnd.style.opacity = '0%';
    theEnd.style.zIndex = '-1';
})

typeWrite(telainicialTexto1, telainicialTexto2);



function validarInput(botao) {

    botao.classList.add('inputTexto');
    setTimeout(() => {
        botao.classList.remove('inputTexto');
        //input.classList.remove('inputTexto')        
    }, 400)

    botao.classList.add('animar-form');
    setTimeout(() => {
        botao.classList.remove('animar-form');
        //input.classList.remove('inputTexto')        
    }, 400)

}

