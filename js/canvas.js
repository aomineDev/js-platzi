var linea = document.getElementById("lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoPorClick() {
	var colorcito = document.getElementById("colorcitocito");
	colorcito = colorcito.value;
	var espacio = ancho / parseInt(linea.value);
	var n1 = 0;
	var n2 = espacio;
	var n3 = 300;
	var n4 = 300;
	n3 -= espacio;

	while(n1 < 300 && n2 > 0) {
		dibujarlinea(colorcito, 0, n1, n2, 300);
		dibujarlinea(colorcito, n1, 0, 300, n2);
		dibujarlinea(colorcito, 300, n1, n3, 300);
		dibujarlinea(colorcito, n4, 0, 0, n2);

		dibujarlinea(colorcito, 1, 1, 1, 299);
		dibujarlinea(colorcito, 1, 1, 299, 1);
		dibujarlinea(colorcito, 299, 1, 299, 299);
		dibujarlinea(colorcito, 299, 299, 1, 299);
		n1 += espacio;
		n2 += espacio;
		n3 -= espacio;
		n4 -= espacio;
	}
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
