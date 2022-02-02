const imgMenu = document.getElementById('menu')
const menu = document.getElementById('menu-config')
const img = document.getElementById('img-menu')
const jogos = document.getElementById('jogo')

imgMenu.addEventListener('click', () => {

    menu.classList.add('menu-show')
    menu.classList.remove('menu-hide')

})

img.addEventListener('click', () => {

    menu.classList.remove('menu-show')
    menu.classList.add('menu-hide')


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
const texto1 = document.querySelector('#tela-inicial-jogo');
const texto2 = document.querySelector('#tela-inicial-forca');
const telaInicial = document.querySelector('#tela-inicial');
const body = document.querySelector('body');


typeWrite(texto1, texto2);
