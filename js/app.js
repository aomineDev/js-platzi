alert("Sumar 2 numeros");
var x = parseFloat(prompt("1er numero"));
var y = parseFloat(prompt("2do numero"));
var z= x + y;
document.write("La suma de los 2 numeros es " + z);

function suma (n1, n2) {
	var r = n1 + n2;
	document.write("<br>La suma de los 2 numeros es " + r);
}

suma (x, y);
