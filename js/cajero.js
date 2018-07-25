class Billette {
	constructor (v, c) {
		this.valor = v;
		this.cantidad = c;
	}
}
var caja =[];
caja.push(new Billette(100,10));
caja.push(new Billette(50,30));
caja.push(new Billette(20,20));
caja.push(new Billette(10,20));
caja.push(new Billette(5,50));
caja.push(new Billette(1,100));

/* var dinero = parseInt(prompt("Cuanto Dineros desea retirar?")); */
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dineros);
var boton2 = document.getElementById("limpiar");
boton2.addEventListener("click", limpiar);
var resultado = document.getElementById("resultado");
var entregado = [];
var div = 0;
var papeles = 0;

function dineros () {
	var dinero = document.getElementById("dinerito");
	dinero = parseInt(dinero.value);

	for ( var b of caja) {
		if (dinero > 0) {
			div = Math.floor(dinero/b.valor);
			if (div > b.cantidad) {
				papeles = b.cantidad;
			}else{
				papeles = div;
			}
			entregado.push(new Billette(b.valor, papeles));
			dinero -= (b.valor * papeles);
		}
	}
	if (dinero > 0) {
		resultado.innerHTML = "soy un cajero pobre :'v";
	}else{
		for (var e of entregado) {
			resultado.innerHTML += "<br>" + e.cantidad + " billetes de $" + e.valor;
		}
	}
}

function limpiar () {
	resultado.innerHTML = "";
}