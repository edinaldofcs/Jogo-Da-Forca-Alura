var tela = document.querySelector('canvas');

var pincel = tela.getContext('2d');

pincel.fillStyle = "rgba(0,0,0,0)";
pincel.fillRect(0, 0, 600, 600);

function quadrado(x0, y0, xF, yF, color,) {
    pincel.fillStyle = color; // colorir retângulo
    pincel.fillRect(x0, y0, xF, yF); // construir retângulo     
}

function circulo(x0, y0, raio, cor) {

    pincel.fillStyle = cor; // colorir retângulo
    pincel.beginPath();
    pincel.arc(x0, y0, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhoLivre(xa, ya, xc, yc, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, ya - 15);
    pincel.lineTo(xc, yc);
    pincel.lineTo(xc, yc + 15);
    pincel.fill();
}

function triangulo(xa, ya, xc, yc, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa - 13, yc);
    pincel.lineTo(xc - 37, yc);
    pincel.fill();
}

const forca = () => {
    quadrado(50, 500, 500, 50, '#c77b00', 1);
    quadrado(100, 25, 50, 550, '#c77b00', 1);
    quadrado(50, 50, 350, 25, '#c77b00', 1);
    quadrado(140, 335, 185, 15, '#c77b00', 1);//tablado
    desenhoLivre(250, 65, 100, 180, "#c77b00"); //mão francesa
    desenhoLivre(250, 350, 100, 180, "#c77b00"); //mão francesa
}

function posicao1() {

    forca();
    quadrado(345, 50, 10, 60, 'brown', 1);//corda
    
    circulo(350, 130, 25, '#002ec4');//cabeça
    desenhoLivre(350, 165, 380, 210, "#002ec4"); //braço esquerdo
    desenhoLivre(350, 165, 320, 210, "#002ec4"); //braço direito
    quadrado(345, 150, 10, 120, '#002ec4', 1);//tronco
   
    quadrado(337.5, 155, 25, 10, 'brown', 1);//laço
    
    quadrado(337, 255, 8, 80, '#002ec4', 1);//perna direita
    quadrado(355, 255, 8, 80, '#002ec4', 1);//perna esquerda
    triangulo(350, 225, 400, 255, "#002ec4");//cintura    

    circulo(320, 218, 7, '#002ec4');//mão direita
    circulo(380, 218, 7, '#002ec4');//mão esquerda
    circulo(335, 328, 7, '#002ec4');//pé direito
    circulo(365, 328, 7, '#002ec4');//pé esquerdo
}

function gradiente() {
    var grd = pincel.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "rgba(0,0,0,0.7)");
}

function posicao2() {
    forca();
    quadrado(345, 50, 10, 150, 'brown', 1);//corda
    quadrado(345, 220, 10, 120, '#002ec4', 1);//tronco
    desenhoLivre(350, 235, 380, 280, "#002ec4"); //braço esquerdo
    desenhoLivre(350, 235, 320, 280, "#002ec4"); //braço direito
    circulo(350, 200, 25, '#d300eb');
    
    quadrado(337.5, 225, 25, 10, 'brown', 1);//laço
    quadrado(337, 325, 8, 80, '#002ec4', 1);//perna direita
    quadrado(355, 325, 8, 80, '#002ec4', 1);//perna esquerda
    triangulo(350, 300, 400, 325, "#002ec4");//cintura

    circulo(320, 287, 7, '#002ec4');//mão direita
    circulo(380, 287, 7, '#002ec4');//mão esquerda
    circulo(335, 399, 7, '#002ec4');//pé direito
    circulo(365, 399, 7, '#002ec4');//pé esquerdo    
}



function plataforma(num) {
    var comprimento = 0;
    pincel.clearRect(0, 0, 600, 600);
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 600, 600);
    posicao1();

    for (var i = 0; i < num; i++) {
        quadrado(325 + comprimento, 335, 20, 15, '#c77b00', 1);//laço
        comprimento+=20;
    }    
}

var posicaoInicial = true;
posicao1();
const animarMorte = () => {

    pincel.clearRect(0, 0, 600, 600);
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 600, 600);

    if (posicaoInicial) {

        posicao2();
        posicaoInicial = !posicaoInicial
    } else {
        posicao1();
        posicaoInicial = !posicaoInicial
    }
}