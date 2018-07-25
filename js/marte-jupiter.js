var planeta = parseInt(prompt("Elige tu planeta \n1 es Marte, 2 es Jupiter"));
var peso = parseFloat(prompt("¿Cuál es tu peso?"));
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var nombre;

if (planeta == 1) {
	nombre = "marte";
	peso_final = (peso * g_marte)/g_tierra;
	peso_final = parseFloat(peso_final.toFixed(2));
	document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>");
}else if (planeta == 2) {
	nombre = "jupiter";
	peso_final = (peso * g_jupiter)/g_tierra;
	peso_final = parseFloat(peso_final.toFixed(2));
	document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>");
}else{
	document.write("Solo 1 o 2 conchetumare antasub de mrd");
}

/* 
switch (planeta) {
	case 1:
	peso_final = (peso * g_marte)/g_tierra;
	peso_final = parseFloat(peso_final.toFixed(2));
	document.write("Tu peso en marte es <strong>" + peso_final + " kilos</strong>");
	break;

	case 2:
	peso_final = (peso * g_jupiter)/g_tierra;
	peso_final = parseFloat(peso_final.toFixed(2));
	document.write("Tu peso en jupiter es <strong>" + peso_final + " kilos</strong>");
	break;
	
	default:
	document.write("Solo 1 o 2 conchetumare antasub de mrd");
	break;
} 
*/