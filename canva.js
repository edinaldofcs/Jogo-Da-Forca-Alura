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

function desenhaEsquadro(xa, ya, xc, yc, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, ya - 15);
    pincel.lineTo(xc, yc);
    pincel.lineTo(xc, yc + 15);
    pincel.fill();
}

function des(xa, ya, xc, yc, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa - 13, yc - 75);
    pincel.lineTo(xc - 37, yc - 75);
    pincel.fill();
}

const forca = () => {
    quadrado(50, 500, 500, 50, 'brown', 1);
    quadrado(100, 25, 50, 550, 'brown', 1);
    quadrado(50, 50, 350, 25, 'brown', 1);
}


function posicao1() {
    quadrado(345, 50, 10, 150, 'red', 1);//corda
    forca();
    quadrado(345, 220, 10, 120, 'white', 1);//tronco
    circulo(350, 200, 25, 'pink');
    desenhaEsquadro(350, 235, 380, 280, "white"); //braço esquerdo
    desenhaEsquadro(350, 235, 320, 280, "white"); //braço direito
    //desenhaEsquadro(350,340,380,370, "white");
    //desenhaEsquadro(350,340,320,370, "white");
    //quadrado(338, 330, 25, 10, 'blue', 1); //cintura
    quadrado(335, 225, 30, 10, 'blue', 1);//laço
    quadrado(337, 325, 8, 80, 'white', 1);//perna direita
    quadrado(355, 325, 8, 80, 'white', 1);//perna esquerda
    des(350, 300, 400, 400, "white");//cintura
}


function posicao2() {

    quadrado(345, 50, 10, 60, 'red', 1);//corda
    forca();
    circulo(350, 130, 25, 'white');//cabeça
    desenhaEsquadro(350, 165, 380, 210, "white"); //braço esquerdo
    desenhaEsquadro(350, 165, 320, 210, "white"); //braço direito
    quadrado(345, 150, 10, 120, 'white', 1);//tronco
    //quadrado(338, 330, 25, 10, 'blue', 1); //cintura
    quadrado(335, 155, 30, 10, 'blue', 1);//laço
    quadrado(337, 255, 8, 80, 'white', 1);//perna direita
    quadrado(355, 255, 8, 80, 'white', 1);//perna esquerda
    teste(350, 225, 400, 255, "white");//cintura

    function teste(xa, ya, xc, yc, cor) {
        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.moveTo(xa, ya);
        pincel.lineTo(xa - 13, yc);
        pincel.lineTo(xc - 36, yc);
        pincel.fill();
    }
}

var pos = 1;
posicao2();
const res = () => {


    pincel.clearRect(0, 0, 600, 600);
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 600, 600);

    if (pos == 1) {

        posicao1();
        pos = 2
    } else {
        posicao2();
        pos = 1;
    }
}