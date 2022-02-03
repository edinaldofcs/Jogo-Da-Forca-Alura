const imgMenu = document.getElementById('menu')
const imgFecharMenu = document.getElementById('img-menu')
const divMenu = document.getElementById('menu-config')
const esconderMostrarJogo = document.getElementById('jogo')
const input = document.getElementById('input')
const inserir = document.getElementById('inserir')
const iniciar = document.getElementById('iniciar')

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

iniciar.addEventListener('click', ()=>{ 
    divMenu.style.display = 'none'
    telaInicial.style.display = 'none'
    body.classList.add('body')
    imgMenu.style.display = 'none';
    esconderMostrarJogo.style.display = 'block';
    escolherPalavra();
})

imgMenu.addEventListener('click', () => {
    divMenu.classList.add('menu-show')
    divMenu.classList.remove('menu-hide')
})

imgFecharMenu.addEventListener('click', () => {
    divMenu.classList.remove('menu-show')
    divMenu.classList.add('menu-hide')
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


