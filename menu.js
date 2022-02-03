const imgMenu = document.getElementById('menu')
const imgFecharMenu = document.getElementById('img-menu')
const divMenu = document.getElementById('menu-config')
const esconderMostrarJogo = document.getElementById('jogo')
const input = document.getElementById('input')
const inserir = document.getElementById('inserir')
const iniciar = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')

const telainicialTexto1 = document.querySelector('#tela-inicial-jogo');
const telainicialTexto2 = document.querySelector('#tela-inicial-forca');
const telaInicial = document.querySelector('#tela-inicial');
const body = document.querySelector('body');

var textoTemporario = '';

input.addEventListener('input', () => {   
    if (input.value.length < 9) {
        input.value = input.value.replaceAll(/[^a-zA-Z]/g, '').toUpperCase()
        textoTemporario = input.value
    } else {
        input.value = textoTemporario
    }
})

inserir.addEventListener('click', ()=>{
    if(input.value.length >= 5){
        palavra.push(input.value)
        input.value = ''
        //console.log(palavra[0])
    } else{
        //animar
    }
})

iniciar.addEventListener('click', iniciarJogo)

function iniciarJogo(){
    divMenu.style.display = 'none'
    telaInicial.style.display = 'none'
    body.classList.add('body')
    imgMenu.style.display = 'none';
    esconderMostrarJogo.style.display = 'block';
    tela.style.display = 'block';
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
    container.innerHTML = ''
    cemiterio.innerHTML = ''
    letrasNoCemiterio = 0;
    qtdeLetrasEncontradas = 0;
    cemiterio.innerHTML = `<img class="fim" src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_960_720.png" width="50px" />`;
    posicaoInicial = 2;
    animarMorte();    
    iniciarJogo();
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

typeWrite(telainicialTexto1, telainicialTexto2);


