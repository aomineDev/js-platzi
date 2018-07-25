document.addEventListener("keydown", dibujarTeclado);
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39 
};

var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarlinea("blue", x - 1, y - 1, x + 1, y + 1);

function dibujarTeclado(evento) {
	var colorcito = "#0AC8E4";
	var movimiento = 1;
	switch (evento.keyCode) {
		case teclas.UP:
		dibujarlinea(colorcito, x, y, x, y - movimiento);
		y -= movimiento; 
		break;

		case teclas.DOWN:
		dibujarlinea(colorcito, x, y, x, y + movimiento);
		y += movimiento; 
		break;

		case teclas.LEFT:
		dibujarlinea(colorcito, x, y, x - movimiento, y);
		x -= movimiento; 
		break;

		case teclas.RIGHT:
		dibujarlinea(colorcito, x, y, x + movimiento, y);
		x += movimiento; 
		break;
	}
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}