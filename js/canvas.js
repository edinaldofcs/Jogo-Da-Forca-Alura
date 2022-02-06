var tela = document.querySelector('canvas');

var pincel = tela.getContext('2d');

pincel.fillStyle = "rgba(0,0,0,0)";
pincel.fillRect(0, 0, 300, 200);

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

function forca(){
    quadrado(10, 0, 15, 200, '#c77b00', 1);//barra vertical
    quadrado(0, 10, 300, 15, '#c77b00', 1);//barra sup
    quadrado(25, 135, 180, 15, '#c77b00', 1);//tablado
    desenhoLivre(100, 25, 25, 75, "#c77b00"); //mão francesa
    desenhoLivre(100, 150, 25, 75, "#c77b00"); //mão francesa
}

function posicao1() {

    forca();
    quadrado(220, 10, 5, 30, 'brown', 1);//corda
    
    circulo(222, 45, 10, '#002ec4');//cabeça
    desenhoLivre(222, 60, 235, 70, "#002ec4"); //braço esquerdo
    desenhoLivre(222, 60, 207, 70, "#002ec4"); //braço direito
    quadrado(217, 50, 8, 55, '#002ec4', 1);//tronco
   
    quadrado(215, 52, 15, 5, 'brown', 1);//laço
    
    quadrado(210, 100, 8, 35, '#002ec4', 1);//perna direita
    quadrado(225, 100, 8, 35, '#002ec4', 1);//perna esquerda
    triangulo(222, 85, 270, 100, "#002ec4");//cintura    

}

function posicao2() {
    forca();
    quadrado(220, 10, 5, 50, 'brown', 1);//corda
    
    desenhoLivre(222, 80, 235, 90, "#002ec4"); //braço esquerdo
    desenhoLivre(222, 80, 207, 90, "#002ec4"); //braço direito
    quadrado(217, 70, 8, 55, '#002ec4', 1);//tronco
    circulo(222, 65, 10, 'red');//cabeça
    
    quadrado(215, 72, 15, 5, 'brown', 1);//laço
    
    quadrado(210, 120, 8, 35, '#002ec4', 1);//perna direita
    quadrado(225, 120, 8, 35, '#002ec4', 1);//perna esquerda
    triangulo(222, 105, 270, 120, "#002ec4");//cintura     
}



function plataforma(num) {
    var comprimento = 0;
    pincel.clearRect(0, 0, 300, 200);
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 300, 200);
    posicao1();

    for (var i = 0; i < num; i++) {
        quadrado(205 + comprimento, 135, 10, 10, 'red', 1);//laço
        comprimento+=10;
    }    
}

var posicaoInicial = true;
posicao1();
const animarMorte = () => {

    pincel.clearRect(0, 0, 300, 200);
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 300, 200);

    if (posicaoInicial) {

        posicao2();
        posicaoInicial = !posicaoInicial
    } else {
        posicao1();
        posicaoInicial = !posicaoInicial
    }
}


// addEventListener("resize", ()=>{
//     innerWidth < 600 ? posicao1() : posicao2()
// });