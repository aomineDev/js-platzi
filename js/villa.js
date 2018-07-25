document.addEventListener("keydown", moverLobo);
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

var fondo = {
	url: "img/tile.png",
	cargaOK: false
};
var vaca = {
	url: "img/vaca.png",
	cargaOK: false
};
var cerdo = {
	url: "img/cerdo.png",
	cargaOK: false
};
var pollo = {
	url: "img/pollo.png",
	cargaOK: false
};
var lobo = {
	url: "img/lobo.png",
	cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);

function cargarFondo() {
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas() {
	vaca.cargaOK = true;
	mantenerPosicion();
}

function cargarCerdos() {
	cerdo.cargaOK = true;
	mantenerPosicion();
}

function cargarPollos() {
	pollo.cargaOK = true;
	mantenerPosicion();
}
function cargarLobos() {
	lobo.cargaOK = true;
	dibujar();
}

var cantidadV = aleatorio(1, 10);
var cantidadC = aleatorio(3, 5);
var cantidadP = aleatorio(2, 15);

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

var lx = aleatorio(0, 420);
var ly = aleatorio(0, 420);

function dibujar() {
	if (fondo.cargaOK == true) {
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOK == true) {
		for(i = 0; i < cantidadV; i++) {
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if (cerdo.cargaOK == true) {
		for(i = 0; i < cantidadC; i++) {
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
		}
	}
	if (pollo.cargaOK == true) {
		for(i = 0; i < cantidadP; i++) {
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if (lobo.cargaOK == true) {
		papel.drawImage(lobo.imagen, lx, ly);
	}
}

function mantenerPosicion()
{
	if(vaca.cargaOK)
	{
		for(var i=0; i<cantidadV; i++)
		{
			var vx = aleatorio(0, 7);
			var vy = aleatorio(0, 7);
			vx *= 60;
			vy *= 60;
			xVaca[i] = vx;
			yVaca[i] = vy; 		
		}
	}
	if(cerdo.cargaOK)
	{
		for(var i=0; i<cantidadC; i++)
		{
			var cx = aleatorio(0, 6);
			var cy = aleatorio(0, 6);
			cx *= 60;
			cy *= 60;
			xCerdo[i] = cx;
			yCerdo[i] = cy; 		
		}
	}
	if(pollo.cargaOK)
	{
		for(var i=0; i<cantidadP; i++)
		{
			var px = aleatorio(0, 6);
			var py = aleatorio(0, 6);
			px *= 60;
			py *= 60;
			xPollo[i] = px;
			yPollo[i] = py; 		
		}
	}
	dibujar();
}

function moverLobo(evento) {
	var movimiento = 20;
	var teclas = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39 
	};
	switch (evento.keyCode) {
		case teclas.UP:
		ly -= movimiento;
		dibujar();
		break;

		case teclas.DOWN:
		ly += movimiento;
		dibujar();
		break;

		case teclas.LEFT:
		lx -= movimiento;
		dibujar();
		break;

		case teclas.RIGHT:
		lx += movimiento;
		dibujar();
		break;
	}
}

function aleatorio(min, max) {
	var resultado;
	resultado = Math.floor(Math.random() * (max  - min + 1)) + min;
	return resultado;
}